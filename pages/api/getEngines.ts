import openai from "@/lib/chatgpt";
import type { NextApiRequest, NextApiResponse } from "next";

// what we are returning in Data below
type Option = {
  value: string;
  label: string;
};

// returning type of model option (Option array)
type Data = {
  modelOptions: Option[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // list all the models and passing data from it
  const models = await openai.listModels().then((res) => res.data.data);

  // then mapping out
  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  res.status(200).json({ modelOptions });
}
