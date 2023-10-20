import createCardService from "./createCardService";

export default function ServicesList(props) {
  const NEW_SERVICES = [];

  for (let i = 0; i < props.services.length; i++) {
    NEW_SERVICES.push(props.services[i]);
  }

  return (
    <div className="margin-auto max-width padding-top-section padding-bottom-section">
      {NEW_SERVICES.map(createCardService)}
    </div>
  );
}
