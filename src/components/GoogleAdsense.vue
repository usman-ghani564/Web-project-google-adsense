<template>
  <div>
      <div>
      <h2>Google AdSenses</h2>
    </div>
    <br />
    <div class="your-page">
        <div class="section">
            <div class="container">
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-9567413940190918"
                     data-ad-slot="6809375414"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleAdsense",
  mounted () {
    this.adsenseAddLoad();
  },
  methods:{
      adsenseAddLoad(){
          let inlineScript   = document.createElement("script");
          inlineScript.type  = "text/javascript";
          inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'
          document.getElementsByTagName('body')[0].appendChild(inlineScript);
      }
  }
};
</script>
