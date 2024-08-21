import { FaFilePdf } from "react-icons/fa6";
import { createData } from "../../../../utils/createData";
// ========== Import Xanthan Gum File Here ==========
import XanthanGum1 from "../docs/Xanthan Gum/SE-XG-3231214028.pdf";
// ========== Import DME File Here ==========
import DME1 from "../docs/DME/SE-DME-2024929.pdf";
import DME2 from "../docs/DME/SE-DME-2024933.pdf";
// ========== Import Oxygen Scav File Here ==========
import OxygenScav1 from "../docs/Oxygen Scav/SE-OS-2024930.pdf";
// ========== Import Pipe Lax W File Here ==========
import PipeLaxW1 from "../docs/Pipe Lax W/SE-PL-2024925.pdf";
// ========== Import Kwick Seal (F,M,C) File Here ==========
import KwickSeal1 from "../docs/Kwick Seal (F,M,C)/SE-KSF-030508112.pdf";
import KwickSeal2 from "../docs/Kwick Seal (F,M,C)/SE-KSM-03050811.pdf";
// ========== Import API Filter Press File Here ==========
import ApiFilterPress1 from "../docs/Equipments/API Filter Press/API Filter Press Calibration Certificate.pdf";
// ========== Import Cup Heater File Here ==========
import CupHeater1 from "../docs/Equipments/Cup Heater/Cup Heater Calibration Certificate.pdf";
// ========== Import VG Meters File Here ==========
import VGMeters1 from "../docs/Equipments/VG Meters/VG 800 calibration Certificate.pdf";

const tableContent = {
  XanthanGum: [
    createData(
      1,
      "SE-XG-3231214028",
      "1403-05",
      <a href={XanthanGum1} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  DME: [
    createData(
      1,
      "SE-DME-2024929",
      "1403-05",
      <a href={DME1} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      2,
      "SE-DME-2024933",
      "1403-05",
      <a href={DME2} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  OxygenScav: [
    createData(
      1,
      "SE-OS-2024930",
      "1403-05",
      <a href={OxygenScav1} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  PipeLaxW: [
    createData(
      1,
      "SE-PL-2024925",
      "1403-05",
      <a href={PipeLaxW1} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  KwickSeal: [
    createData(
      1,
      "SE-KSF-030508112",
      "1403-05",
      <a href={KwickSeal1} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      2,
      "SE-KSM-03050811",
      "1403-05",
      <a href={KwickSeal2} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  ApiFilterPress: [
    createData(
      1,
      "API Filter Press Calibration Certificate",
      "1403-05",
      <a href={ApiFilterPress1}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  CupHeater: [
    createData(
      1,
      "Cup Heater Calibration Certificate",
      "1403-05",
      <a href={CupHeater1}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  VGMeter: [
    createData(
      1,
      "VG 800 calibration Certificate",
      "1403-05",
      <a href={VGMeters1}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
};

export default tableContent;
