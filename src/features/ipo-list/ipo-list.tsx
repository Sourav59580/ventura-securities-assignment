import { useEffect, useState } from "react";

import style from "./ipo-list.module.scss";
import { useFetchIPOList } from "../../entities/ipo/model/use-ipo-list";
import { useResizeListener } from "primereact/hooks";
import { Container } from "react-bootstrap";
import breakpoints from "../../shared/styles/breakpoints";
import DesktopIpoList from "./ui/desktop-ipo-list/desktop-ipo-list";
import MobileIpoList from "./ui/mobile-ipo-lsit/mobile-ipo-list";
import clsx from "clsx";
import Loader from "../../shared/ui/loader/loader";

const IpoList = () => {
  const { data: ipoList, loading } = useFetchIPOList();
  const [eventData, setEventData] = useState({ width: 0, height: 0 });

  const [bindWindowResizeListener, unbindWindowResizeListener] =
    useResizeListener({
      listener: (event: any) => {
        setEventData({
          width: event.currentTarget.innerWidth,
          height: event.currentTarget.innerHeight,
        });
      },
    });

  useEffect(() => {
    setEventData({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    bindWindowResizeListener();

    return () => {
      unbindWindowResizeListener();
    };
  }, [bindWindowResizeListener, unbindWindowResizeListener]);


  return (
    <Container className="pt-4">
      <h1 className={clsx(style.ipoTitle, 'mb-5')}>IPO - Initial Public Offerings</h1>
      {
        loading && <Loader />
      }

      {eventData.width > parseInt(breakpoints.sm, 10) ? (
        <DesktopIpoList ipoData={ipoList} />
      ) : (
        <MobileIpoList ipoData={ipoList} />
      )}
    </Container>
  );
};

export default IpoList;
