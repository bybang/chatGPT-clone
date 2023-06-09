"use client";

import useSWR from "swr";
import Select from "react-select";

// we provide the key. and fetcher is what we do to get information(data, err, loading)
const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModelSelection() {
  // the key for useSWR can be anything
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        options={models?.modelOptions}
        defaultValue={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        placeholder={model}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
