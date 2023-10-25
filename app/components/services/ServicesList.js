import createCardService from "./createCardService";

export default function ServicesList(props) {
  const NEW_SERVICES = [];

  for (let i = 0; i < props.services.length; i++) {
    NEW_SERVICES.push(props.services[i]);
  }

  return <div>{NEW_SERVICES.map(createCardService)}</div>;
}
