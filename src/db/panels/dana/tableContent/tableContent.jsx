import { FaFilePdf } from "react-icons/fa6";
import { createData } from "../../../../utils/createData";
// ========== Import CMC File Here ==========
import CMC1 from "../docs/CMC/SS-CMC-01-SAVA QC report CMC HV 06 March 2024-API.pdf";
import CMC2 from "../docs/CMC/SS-CMC-02-SAVA QC report CMC HV 07 Apr 2024-API.pdf";
// ========== Import Lime File Here ==========
import Lime1 from "../docs/Lime/SE-1402-42-RIPI QC report Lime-15 March 2024.pdf";
// ========== Import Polyanlomic Cellulose File Here ==========
import PolyanlomicCellulose1 from "../docs/Polyanlomic Cellulose/202304-QC Report PAC-20 Apr 2024.pdf";
// ========== Import Soda Ash File Here ==========
import SodaAsh1 from "../docs/Soda Ash/SO-SA-13-SAVA QC report Soda Ash-25 Apr 2024.pdf";
import SodaAsh2 from "../docs/Soda Ash/SO-SA-14020826-SAVA QC report Soda Ash-20 Nov 2023.pdf";
// ========== Import Starch Ht File Here ==========
import StarchHt1 from "../docs/Starch HT/SS-F-33-SAVA QC report Starch HT-02 Oct 2024.pdf";
import StarchHt2 from "../docs/Starch HT/SS-F-43-SAVA QC report Starch HT-25 Apr 2024.pdf";
// ========== Import Starch Lv File Here ==========
import StarchLv1 from "../docs/Starch Lv/SS-F-30-SAVA QC report Starch Lv 25 Sep 2023-NISOC.pdf";
import StarchLv2 from "../docs/Starch Lv/SS-F-34-SAVA QC report Starch Lv-25 Oct 2023-NISOC.pdf";
import StarchLv3 from "../docs/Starch Lv/SS-F-36-SAVA QC report Starch Lv-22 Nov 2023-NISOC.pdf";
import StarchLv4 from "../docs/Starch Lv/SS-F-38-SAVA QC report Starch Lv-18 Jan 2024-NISOC.pdf";

const tableContent = {
  CMC: [
    createData(
      1,
      "CMC-01-SAVA-API",
      "Mar 6, 2024",
      <a href={CMC1}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      2,
      "CMC-02-SAVA-API",
      "Apr 7, 2024",
      <a href={CMC2}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  Lime: [
    createData(
      1,
      "SE-1402-42-RIPI",
      "Mar 15, 2024",
      <a href={Lime1}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  PolyanlomicCellulose: [
    createData(
      1,
      "202304-PAC",
      "Apr 20, 2024",
      <a href={PolyanlomicCellulose1}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  SodaAsh: [
    createData(
      1,
      "SO-SA-13-SAVA",
      "Apr 25, 2024",
      <a href={SodaAsh1}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      2,
      "SO-SA-14020826-SAVA",
      "Nov 23, 2023",
      <a href={SodaAsh2}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  StarchHt: [
    createData(
      1,
      "SS-F-33-SAVA",
      "Oct 2, 2024",
      <a href={StarchHt1}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      2,
      "SS-F-43-SAVA",
      "Apr 25, 2024",
      <a href={StarchHt2}>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
  StarchLv: [
    createData(
      1,
      "SS-F-30-SAVA-NISOC",
      "Sep 25, 2023",
      <a href={StarchLv1} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      2,
      "SS-F-34-SAVA-NISOC",
      "Oct 25, 2023",
      <a href={StarchLv2} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      3,
      "SS-F-36-SAVA-NISOC",
      "Nov 22, 2023",
      <a href={StarchLv3} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      4,
      "SS-F-38-SAVA-NISOC",
      "Jan 18, 2024",
      <a href={StarchLv4} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
};

export default tableContent;
