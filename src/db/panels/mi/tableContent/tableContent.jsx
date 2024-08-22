import { FaFilePdf } from "react-icons/fa6";
import { createData } from "../../../../utils/createData";
// ========== Import StarchLv File Here ==========
import StarchLv1 from "../docs/Starch Lv/BN-SS-F-02-SAVA QC report Starch Lv 30 Nov 2021.pdf";
import StarchLv2 from "../docs/Starch Lv/BN-SS-F-13-SAVA QC report Starch Lv 22 May 2022-NISOC.pdf";
import StarchLv3 from "../docs/Starch Lv/BN-SS-F-13-SAVA QC report Starch Lv 23 June 2022-NISOC.pdf";
import StarchLv4 from "../docs/Starch Lv/BN-SS-F-14-SAVA QC report Starch Lv 24 May 2022-API.pdf";
import StarchLv5 from "../docs/Starch Lv/BN-SS-F-14-SAVA QC report Starch Lv 25 June 2022-API.pdf";
import StarchLv6 from "../docs/Starch Lv/BN-SS-F-15-SAVA QC report Starch Lv 25 June 2022-NISOC.pdf";
import StarchLv7 from "../docs/Starch Lv/BN-SS-F-17-SAVA QC report Starch Lv 16 Dec 2022-NISOC.pdf";
import StarchLv8 from "../docs/Starch Lv/BN-SS-F-21-SAVA QC report Starch Lv 30 Jan 2023-API.pdf";
import StarchLv9 from "../docs/Starch Lv/BN-SS-F-25-SAVA QC report Starch Lv 17 June 2023-NISOC.pdf";
import StarchLv10 from "../docs/Starch Lv/BN-SS-F-27-SAVA QC report Starch Lv 9 Aug 2023-NISOC.pdf";
import StarchLv11 from "../docs/Starch Lv/BN-SS-F-28-SAVA QC report Starch Lv-API-02 Sep 2023.pdf";
import StarchLv12 from "../docs/Starch Lv/BN-SS-F-46-SAVA QC report Starch Lv-API-29 July 2024.pdf";
import StarchLv13 from "../docs/Starch Lv/BN-SS-F-42-SAVA QC report Starch LV-NISOC-06 Aug 2024.pdf";

const tableContent = {
  StarchLv: [
    createData(
      1,
      "SS-F-02-SAVA-API",
      "Nov 30, 2021",
      <a href={StarchLv1} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      2,
      "SS-F-13-SAVA-NISOC",
      "May 22, 2022",
      <a href={StarchLv2} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      3,
      "SS-F-13-NISOC",
      "June 23, 2022",
      <a href={StarchLv3} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      4,
      "SS-F-14-API",
      "May 24, 2022",
      <a href={StarchLv4} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      5,
      "SS-F-14-API",
      "June 25, 2022",
      <a href={StarchLv5} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      6,
      "SS-F-15-NISOC",
      "June 25, 2022",
      <a href={StarchLv6} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      7,
      "SS-F-17-NISOC",
      "Dec 16, 2022",
      <a href={StarchLv7} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      8,
      "SS-F-21-API",
      "Jan 30, 2023",
      <a href={StarchLv8} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      9,
      "SS-F-25-Nisoc",
      "June 17, 2023",
      <a href={StarchLv9} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      10,
      "SS-F-27-NISOC",
      "Aug 9, 2023",
      <a href={StarchLv10} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      11,
      "SS-F-28-API",
      "Sep 2, 2023",
      <a href={StarchLv11} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      12,
      "SS-F-46-API",
      "July 29, 2024",
      <a href={StarchLv12} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
    createData(
      13,
      "SS-F-42-NISOC",
      "Aug 6, 2024",
      <a href={StarchLv13} target="_blank" download>
        <FaFilePdf style={{ fontSize: 20 }} />
      </a>
    ),
  ],
};

export default tableContent;
