export default function CloseButton(props) {
  return (
    <div className="float-right">
      <button
        onClick={props.onClose}
        className="cursor display-flex align-self background-light-green no-border padding-02 link"
      >
        <img
          className="width-1 "
          src="https://chalet-webapp.s3.amazonaws.com/icons/2931151_close_delete_exit_remove_x_icon.png"
          alt="close"
        />
      </button>
    </div>
  );
}
