// import ServiceItem from ""
// import classes from

function ServicesList() {
  return (
    <ul className={classes.list}>
      {props.services.map((service) => (
        <ServiceItem
          key={service.id}
          id={service.id}
          image={service.img}
          title={service.title}
          description={service.description}
        />
      ))}
    </ul>
  );
}
