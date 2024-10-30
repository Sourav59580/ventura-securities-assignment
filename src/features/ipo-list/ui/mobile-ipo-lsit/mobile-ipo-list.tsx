import ListGroup from "react-bootstrap/ListGroup";
import { IPOData } from "../../../../entities/ipo/model/types";
import { Link } from "react-router-dom";

import style from "./mobile-ipo-list.module.scss";
import { formatDateRange } from "../../../../shared/lib/formate-date";

interface MobileIpoListProps {
  ipoData: IPOData[];
}

const MobileIpoList: React.FC<MobileIpoListProps> = ({ ipoData }) => {
  return (
    <ListGroup>
      {ipoData?.map((ipo) => (
        <ListGroup.Item>
          <Link className="d-flex gap-2 py-2" to={`/ipo/${ipo.id}`}>
            <div className={style.companyImage}>
              <img src={ipo.image} />
            </div>
            <div className="d-flex flex-column">
              <strong className={style.title}>{ipo.name}</strong>
              <div className={style.subtitle}>
                Issued on {formatDateRange(ipo.issueDates)}
              </div>
            </div>
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MobileIpoList;
