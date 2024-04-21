import { useEffect, useState } from "react";
import { doptions } from "./constants";
import formatDate from "../utils/formatDate";

const Modal = ({ detailId, close }) => {
  const [d, setDetail] = useState(null);

  useEffect(() => {
    setDetail(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        doptions
      )
      .then((res) => setDetail(res.data));
  }, [detailId]);

  new Date(d.time.scheduled.departure * 1000);

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>
        {!d ? (
          <div class="loader">
            <span></span>
          </div>
        ) : (
          <>
            <h2>{d.aircraft.model.text}</h2>
            <h2>{d.aircraft.model.code}</h2>
            <p>
              <span>Kuyruk Kodu</span>
              <span>{d.aircraft.registration}</span>
            </p>
            <img src={d.aircraft.images.large[0].src} />
            <p>
              <span>Şirket</span>
              <span>{d.airline.short}</span>
            </p>
            <p>
              <span>Kalkış</span>
              <a target="_blank" href={d.airport.origin.name}>
                {d.airport.origin.name}
              </a>
            </p>
            <p>
              <span>İniş</span>
              <a target="_blank" href={d.airport.destination.website}>
                {d.airport.destination.name}
              </a>
            </p>

            <p>
              <span>Kalkış Zamanı</span>
              <span>{formatDate(d.time.scheduled.departure)}</span>
            </p>

            <p>
              <span>İniş Zamanı</span>
              <span>{formatDate(d.time.scheduled.arrival)}</span>
            </p>

            <p className={d.status.icon}>
              <span>{d.status.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
