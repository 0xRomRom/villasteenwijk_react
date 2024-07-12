import { useEffect, useState } from "react";
import stl from "./CookieBanner.module.css";
import { GrConfigure } from "react-icons/gr";
import { FaFlaskVial } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CookieBanner = () => {
  const navigate = useNavigate();
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
  });
  const [showBanner, setShowBanner] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);
  const [navigated, setNavigated] = useState(false);

  const acceptCookies = () => {
    document.cookie = "cookieConsent=true; max-age=31536000";
    setShowBanner(false);
  };

  const declineCookies = () => {
    document.cookie = "cookieConsent=false; max-age=31536000";
    setShowBanner(false);
  };

  useEffect(() => {
    const hasCookieConsent = document.cookie
      .split(";")
      .map((cookie) => cookie.trim().split("="))
      .find(
        ([key, value]) =>
          (key === "cookieConsent" && value === "true") || value === "false"
      );

    if (
      hasCookieConsent &&
      hasCookieConsent[0].length > 0 &&
      hasCookieConsent[1] === "true"
    ) {
      setShowBanner(false);
      return;
    }
    if (
      hasCookieConsent &&
      hasCookieConsent[0].length > 0 &&
      hasCookieConsent[1] === "false"
    ) {
      setShowBanner(false);
      return;
    }
  }, []);

  const toggleCookieSettings = (setting) => {
    setCookieSettings((prevState) => {
      return {
        ...prevState,
        [setting]: !cookieSettings[setting],
      };
    });
  };

  const readMoreCta = () => {
    if (!navigated) {
      navigate("/privacy");
      setNavigated(true);
      return;
    }
    setNavigated(false);
    navigate("/");
  };

  return (
    <>
      {showBanner === true && (
        <div
          className={`${stl.cookieBackdrop} ${navigated ? stl.visible : ""}`}
          style={{
            display: showBanner ? "flex" : "none",
          }}
        >
          <div className={stl.bannerWrap}>
            <div className={stl.cookiebanner}>
              {showPreferences && (
                <div className={stl.prefsBox}>
                  <div className={stl.prefItem}>
                    <GrConfigure
                      className={stl.reactIcon}
                      style={{
                        color: cookieSettings.essential
                          ? "rgb(74, 222, 128)"
                          : "rgb(142, 142, 142)",
                      }}
                    />
                    <div className={stl.prefTextBlock}>
                      <span className={stl.prefTitle}>Essential Cookies</span>
                      <span className={stl.prefDesc}>
                        These cookies improve user experience by storing user
                        configurations. Think of closed pop-ups and preferred
                        list orders.
                      </span>
                    </div>
                    <div className={stl.toggleBox}>
                      <div
                        className={stl.toggleWrap}
                        onClick={() => toggleCookieSettings("essential")}
                        style={{
                          border: cookieSettings.essential
                            ? "1px solid rgb(74, 222, 128)"
                            : "1px solid rgb(33, 40, 54)",
                        }}
                      >
                        <div
                          className={`${stl.toggleDot} ${
                            cookieSettings.essential ? stl.flipped : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className={stl.prefItem}>
                    <FaFlaskVial
                      className={stl.reactIcon}
                      style={{
                        color: cookieSettings.analytics
                          ? "rgb(74, 222, 128)"
                          : "rgb(142, 142, 142)",
                      }}
                    />
                    <div className={stl.prefTextBlock}>
                      <span className={stl.prefTitle}>Analytics Cookies</span>
                      <span className={stl.prefDesc}>
                        These cookies keep track of page visits, interactions
                        and more. They're used to improve our services.
                      </span>
                    </div>
                    <div className={stl.toggleBox}>
                      <div
                        className={stl.toggleWrap}
                        onClick={() => toggleCookieSettings("analytics")}
                        style={{
                          border: cookieSettings.analytics
                            ? "1px solid rgb(74, 222, 128)"
                            : "1px solid rgb(33, 40, 54)",
                        }}
                      >
                        <div
                          className={`${stl.toggleDot} ${
                            cookieSettings.analytics ? stl.flipped : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <button
                    className={stl.saveConfig}
                    onClick={() => {
                      setShowPreferences(false);
                    }}
                  >
                    Save
                  </button>
                </div>
              )}

              <div
                className={stl.mainBanner}
                style={{
                  borderTop: showPreferences ? "1px solid var(--border)" : "",
                }}
              >
                <button className={stl.declineCta} onClick={declineCookies}>
                  Decline
                </button>
                <span className={stl.bannerSpan}>
                  We use cookies to <span className={stl.white}>improve</span>{" "}
                  your user experience.
                  <br />
                </span>
                <div className={stl.btnsWrap}>
                  <button className={stl.acceptCta} onClick={acceptCookies}>
                    Accept
                  </button>
                  <button
                    className={stl.prefCta}
                    onClick={() => setShowPreferences(!showPreferences)}
                  >
                    Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
