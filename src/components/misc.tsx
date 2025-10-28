import React from "react";

export const HostfullyBookingWidget = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<script type="text/javascript" src="https://platform.hostfully.com/assets/js/pikaday.js"></script>

<script type="text/javascript" src="https://platform.hostfully.com/assets/js/leadCaptureWidget_2.0.js"></script>

<div id="leadWidget"></div>

<script>
var widget = new Widget('leadWidget', '1510fa08-fbe0-4f2c-abc6-c5225900b486', {"maximun_availability":"2028-10-13T14:22:06.943Z","type":"agency","fields":[],"showAvailability":true,"lang":"US","minStay":true,"price":true,"hidePriceWithoutDates":false,"cc":false,"emailClient":true,"saveCookie":true,"showDynamicMinStay":true,"backgroundColor":"#FFFFFF","buttonSubmit":{"backgroundColor":"#F8981B"},"showPriceDetailsLink":false,"showGetQuoteLink":false,"labelColor":"#F8981B","showTotalWithoutSD":true,"redirectURL":false,"showDiscount":true,"includeReferrerToRequest":true,"customDomainName":null,"source":null,"aid":"ORB-49587220416635719","clickID":null,"valuesByDefaults":{"checkIn":{"value":""},"checkOut":{"value":""},"guests":{"value":""},"discountCode":{"value":""}},"pathRoot":"https://platform.hostfully.com/"});
</script>`,
      }}
    />
  );
};

export const CalWidget = () => (
  <div
    className="w-full"
    dangerouslySetInnerHTML={{
      __html: `<script src='https://platform.hostfully.com/assets/js/orbirental_calendar_widget_v2.js'></script>

<div id="widget204135"></div>

<script>new orbiwidget('widget204135', {
id: 204135,
showTentative: 0,
monthsToDisplay: 2,
name: "Starlit Grove"
});
</script>`,
    }}
  />
);
