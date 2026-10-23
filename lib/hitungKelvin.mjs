import { getInputWithSimpleValidation } from "./interactive.js";
export async function hitungKelvin() {
  let kelvin = await getInputWithSimpleValidation("Masukan angka: ") + 273.15;

  return kelvin;
}
