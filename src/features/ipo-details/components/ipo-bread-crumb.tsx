import { BreadCrumb } from "primereact/breadcrumb";

const IpoBreadCrumb = () => {
  const items = [{ label: "Market watch" }];
  const home = { icon: <span>Home</span>, url: "/" };
  return <BreadCrumb model={items} home={home} />;
};

export default IpoBreadCrumb;
