import { Link, useParams } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";

import { useFetchIPODetails } from "../../entities/ipo/model/use-ipo-details";
import Loader from "../../shared/ui/loader/loader";
import IpoBreadCrumb from "./components/ipo-bread-crumb";
import style from "./ipo-details.module.scss";
import { ArrowLeft, Back } from "react-bootstrap-icons";
import clsx from "clsx";
import { formatDateRange } from "../../shared/lib/formate-date";
import IpoStep from "./components/ipo-step";

const IpoDetails = () => {
  const { id } = useParams<{ id: string }>();
  const ipoId = id ? Number(id) : NaN;
  const { data: ipoDetails, loading } = useFetchIPODetails(ipoId);

  if (loading) return <Loader />;

  return (
    <Container className="pt-4">
      <IpoBreadCrumb />

      <div className="d-flex flex-wrap justify-content-between mb-4">
        <div className="mt-4 d-flex align-items-center gap-2">
          <Link to={"/"}>
            <Button className="btn-outline px-2 py-1 me-3">
              <img
                src="https://www.svgrepo.com/show/500754/arrow-left.svg"
                style={{ width: "15px" }}
              />
            </Button>
          </Link>

          <div className={clsx(style.companyImage, "p-1")}>
            <img src={ipoDetails?.image} />
          </div>
          <div>
            <h1 className={clsx(style.title, "ellipsis-width")}>
              {ipoDetails?.name} IPO
            </h1>
            <p className={style.subtitle}>{ipoDetails?.name}</p>
          </div>
        </div>

        <div className="d-md-block d-none">
          <div className="right-side d-flex align-items-center gap-3">
            <img
              src="https://www.svgrepo.com/show/524543/file-download.svg"
              style={{ width: "30px" }}
            />
            <Button className="dark-button">Apply now</Button>
          </div>
        </div>
      </div>

      <Card className="radius-15 border mb-4">
        <Card.Header className="radius-15 bg-white border-0 mt-2">
          <b>IPO details</b>
        </Card.Header>
        <Card.Body
          className={clsx(
            style.flexBox,
            "d-flex flex-wrap gap-4 radius-15 border mx-3 mb-3"
          )}
        >
          <div className="box">
            <p className={style.subtitle}>Issue size</p>
            <b>{ipoDetails?.priceRange}</b>
          </div>
          <div className="box">
            <p className={style.subtitle}>Price range</p>
            <b>{ipoDetails?.priceRange}</b>
          </div>
          <div className="box">
            <p className={style.subtitle}>Minimum amount</p>
            <b>{ipoDetails?.minimumInvestment}</b>
          </div>
          <div className="box">
            <p className={style.subtitle}>Lot size</p>
            <b>{ipoDetails?.lotSize}/lots</b>
          </div>
          <div className="box">
            <p className={style.subtitle}>Issue dates</p>
            <b>
              {ipoDetails?.issueDates &&
                formatDateRange(ipoDetails?.issueDates)}
            </b>
          </div>
          <div className="box">
            <p className={style.subtitle}>Listed on</p>
            <b>{ipoDetails?.ipoTimeline?.listingDate}</b>
          </div>
          <div className="box">
            <p className={style.subtitle}>Listed price</p>
            <b>{ipoDetails?.listedPrice}</b>
          </div>
          <div className="box">
            <p className={style.subtitle}>Listing gains</p>
            <b>{ipoDetails?.listingGains}</b>
          </div>
        </Card.Body>
      </Card>

      <Card className="radius-15 border mb-4">
        <Card.Header className="radius-15 bg-white border-0 mt-2">
          <b>IPO timeline</b>
        </Card.Header>
        <Card.Body>
          <IpoStep/>
        </Card.Body>
      </Card>

      <Card className="radius-15 border">
        <Card.Header className="radius-15 bg-white border-0 mt-2">
          <b>About the company</b>
        </Card.Header>
        <Card.Body className={clsx("border-0")}>
          {ipoDetails?.aboutCompany}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default IpoDetails;
