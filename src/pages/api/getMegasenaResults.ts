// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as https from "https";
const fs = require("fs");
import path from "path";
import { AnyPtrRecord } from "dns";

type Data = {
  name: string;
};

const writeJsonFile = (json: AnyPtrRecord) => {
  const RESULT_FILE_PATH = path.resolve(
    path.join(process.cwd(), "src", "utils", "result.json")
  );

  fs.writeFileSync(RESULT_FILE_PATH, JSON.stringify(json));
};

const getArrayOfNumbersFromTd = (td: string) => {
  const regexp = new RegExp(/\d{3}/g);
  const arrayOfNumbers = td.match(regexp);
  return arrayOfNumbers;
};

const parseResultToJson = (html: string) => {
  const str = html;
  const regexp = new RegExp(/(\<td\>\d{3}\<\/td\>){6}/g);
  const arrayOfTds = str.match(regexp);
  const arrayOfGames = arrayOfTds?.map((td, index) => {
    return {
      game: index + 1,
      result: getArrayOfNumbersFromTd(td),
    };
  });
  return arrayOfGames;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const resultsURL =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados?modalidade=Mega-Sena";

  try {
    const result = await axios.get(resultsURL, { httpsAgent });

    const json: any = parseResultToJson(result.data.html);
    writeJsonFile(json);

    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
