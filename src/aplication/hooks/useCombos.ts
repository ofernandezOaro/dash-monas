import { useEffect, useState } from "preact/hooks";
import combos from "./combos.json";

export const useCombos = () => {
  const [trajes, setTrajes] = useState<any>([]);
  const [ojos, setOjos] = useState<any>([]);
  const [sombrero, setSombrero] = useState<any>([]);
  const [boca, setBoca] = useState<any>([]);
  const [accesorios, setAccesorios] = useState<any>([]);
  const [pelaje, setPelaje] = useState<any>([]);
  const [fondo, setFondo] = useState<any>([]);

  const suits = combos.filter((combo) => combo.keyname === "Traje");
  const eyes = combos.filter((combo) => combo.keyname === "Ojos");
  const heat = combos.filter((combo) => combo.keyname === "Sombrero");
  const mouth = combos.filter((combo) => combo.keyname === "Boca");
  const accesories = combos.filter((combo) => combo.keyname === "Accesorios");
  const skins = combos.filter((combo) => combo.keyname === "Pelaje");
  const background = combos.filter((combo) => combo.keyname === "Fondo");

  useEffect(() => {
    setTrajes(suits);
    setOjos(eyes);
    setSombrero(heat);
    setBoca(mouth);
    setAccesorios(accesories);
    setPelaje(skins);
    setFondo(background);
  }, []);

  return {
    boca,
    fondo,
    ojos,
    pelaje,
    accesorios,
    sombrero,
    trajes
  }
}