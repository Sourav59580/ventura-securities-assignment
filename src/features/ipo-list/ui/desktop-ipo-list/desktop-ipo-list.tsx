import React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useNavigate } from "react-router-dom";

import { IPOData } from "../../../../entities/ipo/model/types";
import style from "./desktop-ipo-list.module.scss";
import { formatDateRange } from "../../../../shared/lib/formate-date";

interface DesktopIpoListProps {
  ipoData: IPOData[];
}

const DesktopIpoList: React.FC<DesktopIpoListProps> = ({ ipoData }) => {
  const navigate = useNavigate();

  // Function to render Company Name and Issue Date
  const companyDateTemplate = (rowData: IPOData) => (
    <div className="d-flex align-items-center gap-2">
      <div className={style.companyImage}>
        <img src={rowData.image} />
      </div>
      <div className="text-start">
        <a href={`/ipo/${rowData.id}`}>{rowData.name}</a>
        <div className={style.subtitle}>{formatDateRange(rowData.issueDates)}</div>
      </div>
    </div>
  );

  // Function to render Issue Size
  const issueSizeTemplate = (rowData: IPOData) => (
    <div>{rowData.listedPrice}</div>
  );

  // Function to render Price Range
  const priceRangeTemplate = (rowData: IPOData) => (
    <div>{rowData.priceRange}</div>
  );

  // Function to render Minimum Investment and Quantity
  const minInvestQtyTemplate = (rowData: IPOData) => (
    <div>
      <div>{rowData.minimumInvestment}</div>
      <div className={style.subtitle}>{rowData.lotSize}/5 Lots</div>
    </div>
  );

  return (
    <div className="card">
      <DataTable value={ipoData} onRowClick={(rowData) => navigate(rowData?.data?.id)}>
        <Column
          header="Company / Issue Date"
          body={companyDateTemplate}
          headerClassName={style.th}
          bodyClassName={style.td}
        />
        <Column
          header="Issue Size"
          body={issueSizeTemplate}
          headerClassName={style.th}
          bodyClassName={style.td}
        />
        <Column
          header="Price Range"
          body={priceRangeTemplate}
          headerClassName={style.th}
          bodyClassName={style.td}
        />
        <Column
          header="Min Invest / Qty"
          body={minInvestQtyTemplate}
          headerClassName={style.th}
          bodyClassName={style.td}
        />
      </DataTable>
    </div>
  );
};

export default DesktopIpoList;
