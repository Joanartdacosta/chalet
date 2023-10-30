export default function ModalService(props) {
  return (
    <div className="padding-top-1-25">
      <hr className="border-light-green border-width-0-2 opacity-40" />

      <div className="margin-top-1-25">
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

        <div className="margin-left-1-25 margin-right-1-25">
          <h3 className="padding-top-1-25 padding-bottom-1-25 font-text font-size-11">
            Mais informações
          </h3>

          <p className="padding-bottom-1-25">{props.step1}</p>
          <p className="padding-bottom-1-25">{props.step2}</p>
          <p className="padding-bottom-1-25">{props.step3}</p>
          <p className="padding-bottom-1-25">{props.step4}</p>
        </div>

        <div className="display-flex justify-evenly media-display-button padding-bottom-1-25 margin-left-1-25">
          <a href="/contacts">
            <button className="cursor border-light-brown background-brown border-radius-075 font-text font-size-08 font-bold text-color-brown padding-05 width-8 link">
              Pedir orçamento
            </button>
          </a>
        </div>
      </div>

      <hr className="border-light-green border-width-0-2 opacity-40" />
    </div>
  );
}
