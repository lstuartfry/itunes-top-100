import { test, expect } from "playwright-ssr";
import { mockTop100ResponseData, mockAlbum1ResponseData } from "../__mocks__";

test("displays album list and navigates to album show page", async ({
  page,
  webServer,
}) => {
  await webServer.route(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
    async (route) => {
      const json = mockTop100ResponseData;
      await route.fulfill({ json });
    }
  );

  await webServer.route(
    "https://itunes.apple.com/lookup?id=1772364192&entity=song",
    async (route) => {
      const json = mockAlbum1ResponseData;
      await route.fulfill({ json });
    }
  );

  await page.goto("/");

  // expect two album titles and artists to be visible
  await expect(page.getByText("Wicked: The Soundtrack")).toBeVisible();
  await expect(
    page.getByText("Wicked Movie Cast, Cynthia Erivo & Ariana Grande")
  ).toBeVisible();
  await expect(page.getByText("Christmas")).toBeVisible();
  await expect(page.getByText("Michael Bublé")).toBeVisible();

  // search by first album artist
  // expect to see first album in list and NOT second album
  await page.getByTestId("search-button").click();
  await page.getByRole("textbox").fill("Cynthia");
  await expect(
    page.getByText("Wicked Movie Cast, Cynthia Erivo & Ariana Grande")
  ).toBeVisible();
  await expect(page.getByText("Christmas")).toHaveCount(0);

  // click on the first album and expect to the see full album details with track listing
  await page.getByText("Wicked: The Soundtrack").click();
  await expect(
    page.getByText("Soundtrack - November 22nd, 2024")
  ).toBeVisible();
  await expect(page.getByText("No One Mourns the Wicked")).toBeVisible();
});
