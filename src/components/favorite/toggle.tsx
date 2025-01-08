"use client";

import { Switch } from "@headlessui/react";

export default function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex justify-center gap-2 text-lg lg:text-2xl items-center">
      <span>all</span>
      <Switch
        checked={enabled}
        onChange={onChange}
        className="group inline-flex h-6 lg:h-10 w-12 lg:w-24 items-center rounded-full bg-gray-300 transition data-[checked]:bg-yellow-400"
      >
        <span className="size-4 lg:size-8 translate-x-1 lg:translate-x-2 rounded-full bg-white transition group-data-[checked]:translate-x-7 lg:group-data-[checked]:translate-x-14" />
      </Switch>
      <span className={`${enabled && "text-yellow-700 transition-colors"}`}>
        favorites
      </span>
    </div>
  );
}
