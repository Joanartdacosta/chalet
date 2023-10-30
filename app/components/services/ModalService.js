export default function ModalService(props) {
  return (
    <div className="padding-top-1-25">
      <div>
        <hr className="border-light-green border-width-0-2 opacity-40" />

        <div className="padding-1">
          <div className="float-right">
            <button
              onClick={props.onClose}
              className="display-flex align-self background-light-green no-border padding-02 link"
            >
              <img
                className="width-1"
                src="https://chalet-webapp.s3.amazonaws.com/icons/2931151_close_delete_exit_remove_x_icon.png"
                alt="close"
              />
            </button>
          </div>
          <div>
            <h3 className="padding-top-1-25 padding-bottom-1-25 font-text font-size-11 media-font-text media-padding-bottom media-padding-top">
              Mais informações
            </h3>

            <p className="padding-bottom-1-25 media-padding-bottom">
              {props.step1}
            </p>
            <p className="padding-bottom-1-25 media-padding-bottom">
              {props.step2}
            </p>
            <p className="padding-bottom-1-25 media-padding-bottom">
              {props.step3}
            </p>
            <p className="padding-bottom-1-25 media-padding-bottom">
              {props.step4}
            </p>
          </div>
          <div className="display-flex justify-evenly media-display-button">
            <a href="/contacts">
              <button className="border-light-brown background-brown border-radius-075 font-text font-size-08 font-bold text-color-brown padding-05 width-8 link">
                Pedir orçamento
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-light-green border-width-0-2 opacity-40" />
    </div>
  );
}
