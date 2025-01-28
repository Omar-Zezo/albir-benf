import React, { useState } from "react";

const LocationMap = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  // دالة للحصول على الموقع الجغرافي
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);
        },
        (err) => {
          switch (err.code) {
            case err.PERMISSION_DENIED:
              setError("تم رفض الإذن للوصول إلى الموقع.");
              break;
            case err.POSITION_UNAVAILABLE:
              setError("الموقع غير متوفر.");
              break;
            case err.TIMEOUT:
              setError("انتهت مهلة الطلب.");
              break;
            default:
              setError("حدث خطأ غير معروف.");
          }
        }
      );
    } else {
      setError("المتصفح لا يدعم خاصية تحديد الموقع.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">تحديد الموقع الجغرافي</h1>
      <button
        onClick={getLocation}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        احصل على موقعي
      </button>

      <div className="mt-4">
        {location && (
          <>
            <p>
              <strong>خط العرض:</strong> {location.latitude}
              <br />
              <strong>خط الطول:</strong> {location.longitude}
            </p>
            <div className="mt-4">
              {/* خريطة OpenStreetMap مدمجة باستخدام iframe */}
              <iframe
                title="خريطة الموقع"
                width="100%"
                height="400"
                style={{ border: 0 }}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                  location.longitude - 0.01
                }%2C${location.latitude - 0.01}%2C${
                  location.longitude + 0.01
                }%2C${location.latitude + 0.01}&layer=mapnik&marker=${
                  location.latitude
                }%2C${location.longitude}`}
                allowFullScreen
              ></iframe>
              <p className="text-sm mt-2">
                <a
                  href={`https://www.openstreetmap.org/?mlat=${location.latitude}&mlon=${location.longitude}#map=15/${location.latitude}/${location.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  عرض الموقع على OpenStreetMap
                </a>
              </p>
            </div>
          </>
        )}

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default LocationMap;
