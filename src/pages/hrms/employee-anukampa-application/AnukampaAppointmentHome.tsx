import React from "react";
import PageLayout from "@/components/PageLayout";

const AnukampaAppointment: React.FC = () => {
  return (
    <PageLayout title="Anukampa Appointment">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            ANUKAMPA APPOINTMENT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="rounded-lg shadow-sm p-4 bg-gradient-to-r from-orange-400 to-orange-300 text-white
                  transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <div className="text-sm font-semibold text-center">
              Number of Applications Received
            </div>
            <div className="mt-3 text-center">
              <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-bold">
                1250
              </span>
            </div>
          </div>

          <div
            className="rounded-lg shadow-sm p-4 bg-gradient-to-r from-sky-400 to-sky-300 text-white
                  transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <div className="text-sm font-semibold text-center">
              Approved Application Number
            </div>
            <div className="mt-3 text-center">
              <span className="bg-white text-sky-600 px-4 py-1 rounded-full text-sm font-bold">
                500
              </span>
            </div>
          </div>

          <div
            className="rounded-lg shadow-sm p-4 bg-gradient-to-r from-teal-500 to-teal-400 text-white
                  transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <div className="text-sm font-semibold text-center">
              Number of Applications Awaited
            </div>
            <div className="mt-3 text-center">
              <span className="bg-white text-teal-600 px-4 py-1 rounded-full text-sm font-bold">
                750
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-blue-400 shadow-sm">
          <h3 className="text-lg font-bold text-blue-600 mb-4">
            Anukampa Appointment
          </h3>

          <div className="mb-6">
            <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded font-semibold mb-2">
              अनुकंपा नियुक्ति आवेदन के लिए आवश्यक दस्तावेज़ :
            </div>

            <div className="bg-green-50 p-4 rounded text-sm space-y-1">
              <p>• अनुकंपा नियुक्ति संबंधित आदेश</p>
              <p>• दिवंगत शासकीय सेवक का मृत्यु प्रमाण पत्र</p>
              <p>• आवेदक का जन्म तिथि का प्रमाण पत्र</p>
              <p>
                • आवेदक का मध्यप्रदेश का स्थानीय निवासी / मूल निवासी होने का
                प्रमाण पत्र
              </p>
              <p>
                • आवेदक के अनुसूचित जाति / जनजाति / अन्य पिछड़ा वर्ग से संबंधित
                होने पर जाति प्रमाण पत्र
              </p>
              <p>
                • मध्यप्रदेश स्थित विद्यालय / महाविद्यालय से हायर सेकेण्डरी /
                स्नातक या अन्य परीक्षा उत्तीर्ण करने का प्रमाण पत्र
              </p>
              <p>• परिवार के मुखिया द्वारा सहमति प्रमाण पत्र</p>
              <p>• आवेदक का फोटो</p>

              <p className="text-blue-600 font-semibold mt-2">
                नोट: आवेदन करने से पूर्व उपरोक्त दस्तावेज तैयार कर लें एवं
                अधिकतम 500 KB आकार तक PDF प्रारूप में अपलोड किए जाएँ।
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded font-semibold mb-2">
              अनुकंपा नियुक्ति एवं निगरानी प्रणाली के बारे में :
            </div>

            <div className="bg-green-50 p-4 rounded text-sm leading-relaxed">
              <p>
                मध्यप्रदेश शासन उच्च शिक्षा विभाग के अंतर्गत प्रदेश भर में 3.5
                लाख से अधिक अधिकारी / कर्मचारी कार्यरत हैं। शासकीय कर्मचारी की
                असामयिक मृत्यु होने पर उनके आश्रितों को शासन द्वारा निर्धारित
                नियमों के अनुसार अनुकंपा नियुक्ति प्रदान किए जाने का प्रावधान
                है।
              </p>
              <p className="mt-2">
                अधिकारी / कर्मचारी की असामयिक मृत्यु होने पर उनके आश्रितों
                द्वारा अनुकंपा नियुक्ति हेतु आवेदन प्रस्तुत किए जाते हैं, जिनका
                निराकरण विभिन्न स्तरों पर संबंधित कार्यालयों द्वारा शासन
                नियमानुसार एवं आवेदक की पात्रता के अनुसार किया जाता है।
              </p>
              <p className="mt-2">
                अनुकंपा नियुक्ति से संबंधित सभी प्रकरणों का पारदर्शी एवं समयबद्ध
                निराकरण सुनिश्चित करने, प्रकरणों की अद्यतन स्थिति बनाए रखने तथा
                राज्य एवं अन्य स्तरों पर निगरानी हेतु विभाग द्वारा एजूकेशन
                पोर्टल पर अनुकंपा नियुक्ति से संबंधित ऑनलाइन प्रणाली लागू की गई
                है।
              </p>
            </div>
          </div>

          <div>
            <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded font-semibold mb-2">
              अनुकंपा नियुक्ति बिंदु विशिष्ट :
            </div>

            <div className="bg-green-50 p-4 rounded text-sm space-y-2">
              <p>
                ★ अध्यापक संवर्ग के लिए अनुकंपा नियुक्ति हेतु आवेदक का D.Ed. /
                B.Ed. के साथ शिक्षक पात्रता परीक्षा उत्तीर्ण होना आवश्यक है।
              </p>
              <p>
                ★ नवीन कैडर में नियुक्ति के पश्चात यदि शासकीय सेवा के दौरान
                शिक्षक का निधन होता है, तो भर्ती नियम 2018 के प्रावधानों एवं
                सामान्य प्रशासन विभाग की प्रभावशील नीति के अनुसार पात्रता
                निर्धारित की जाएगी।
              </p>
              <p>
                ★ सभी संबंधित कार्यालयों द्वारा आवेदन पत्रों का पंजीकरण पोर्टल
                के माध्यम से किया जाएगा। पात्रता न होने या दस्तावेज अपूर्ण होने
                की स्थिति में प्रकरण निरस्त अथवा लंबित किया जा सकेगा।
              </p>
              <p>
                ★ समस्त पात्र प्रकरणों में जारी अनुकंपा नियुक्ति आदेशों की
                स्कैन्ड प्रति पोर्टल पर अपलोड की जाएगी, जिससे सभी स्तरों पर
                अद्यतन स्थिति उपलब्ध रहे।
              </p>
              <p>
                ★ अनुकंपा नियुक्ति से संबंधित सभी प्रकरणों की सूची, निरस्तीकरण
                कारण, वर्तमान स्थिति एवं आदेश पोर्टल पर आवेदक एवं जनसामान्य के
                लिए उपलब्ध रहेंगे।
              </p>
              <p>
                ★ इस प्रणाली के लागू होने के पश्चात आवेदन केवल ऑनलाइन माध्यम से
                ही स्वीकार किए जाएंगे, मैन्युअल आवेदन मान्य नहीं होंगे।
              </p>
              <p>
                ★ आवेदक को ऑनलाइन ट्रैकिंग सुविधा उपलब्ध रहेगी, जिसका प्रिंट आउट
                लिया जा सकेगा।
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AnukampaAppointment;
