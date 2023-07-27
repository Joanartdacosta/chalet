import styles from "./service.module.css";

function ServicesList() {
  return (
    <ul className={styles.servicesList}>
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
