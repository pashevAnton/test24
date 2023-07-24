import {ref, onMounted, onUnmounted} from 'vue';
export function useWidget() {
  const widgetLoaded = ref(false);

  onMounted(() => {
    const script = document.createElement('script');
    script.text = `
       (function (w, d, s, o) {
         var f = d.getElementsByTagName(s)[0];
         var j = d.createElement(s);
         w.TTLStreamReady = new Promise((resolve) => {
           j.async = true;
           j.src = 'https://content.24ttl.stream/widget.js';
           f.parentNode.insertBefore(j, f);
           j.onload = function () {
             w.ttlStream = new TTLStream(o);
             resolve(w.ttlStream);
             ttlStream.findAndInsert({
               "brand": "Samsung",
               "productId": "2237",
               "retailerDomain": "activ.kz",
               "templateType": "master_template",
               "resultType": "html",
               "contentType": "minisite",
               "el": ".exampleWrapperContent",
               "language": "kz_ru"
             });
           };
         });
       })(window, document, 'script', {});
     `;

    document.body.appendChild(script);
    widgetLoaded.value = true;
  });

  onUnmounted(() => {
    const widgetElement: HTMLElement | null = document.querySelector('.widget-container');
    if(widgetElement){
      widgetElement.innerHTML = '';
    }
  })

  return {
    widgetLoaded
  };
}