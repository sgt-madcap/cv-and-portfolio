<template>
  <div>
    <section id="About">
      <h3>{{ translations.about }}</h3>
      <p>{{ translations.section_about.description }}</p>
    </section>
    <section id="Skills" class="fullHeightSection">
      <div class="row row-header">
        <h3>{{ translations.skills }}</h3>
      </div>
      <div class="row">
        <div class="col m12 lg6 xl6 s12">
          <div class="skills">
            <a class="left top skills-icon"
              ><img src="@/assets/img/hard-skills.svg" alt="hard-skills"
            /></a>

            <h5>{{ translations.section_skills.hardskills.title }}:</h5>
            <ul>
              <li>
                <span>HTML5</span><img src="@/assets/img/html5.svg" alt="html5" />
              </li>
              <li><span>CSS3</span><img src="@/assets/img/css3.svg" alt="css3" /></li>
              <li>
                <span>Javascript, Typescript, NodeJS, PHP</span
                ><img src="@/assets/img/javascript.svg" alt="javascript" /><img
                  src="@/assets/img/typescript.svg"
                  alt="typescript"
                /><img src="@/assets/img/nodejs.svg" alt="nodejs" /><img
                  src="@/assets/img/php.svg"
                  alt="php"
                />
              </li>
              <li>
                <span>VueJS, Nuxt</span><img src="@/assets/img/vue.svg" alt="vue" /><img
                  src="@/assets/img/nuxt.svg"
                  alt="nuxt"
                />
              </li>
              <li>
                <span>Webpack</span>
                <img src="@/assets/img/webpack.svg" alt="webpack" />
              </li>
              <li>
                <span>Sass, Less</span
                ><img src="@/assets/img/sass.svg" alt="sass" /><img
                  src="@/assets/img/less.svg"
                  alt="less"
                />
              </li>
              <li>
                <span>Bootstrap, Materializecss, Vuetify</span
                ><img src="@/assets/img/bootstrap.svg" alt="bootstrap" /><img
                  src="@/assets/img/materializecss.svg"
                  alt="materializecss"
                /><img src="@/assets/img/vuetify.svg" alt="vuetify" />
              </li>
              <li>
                <span
                  >MongoDB, Firebase Realtime Database, Cloud Firestore,
                  SQL</span
                ><img src="@/assets/img/mongodb.svg" alt="mongodb" /><img
                  src="@/assets/img/firebase-realtime-database.svg"
                  alt="firebase-realtime-database"
                /><img
                  src="@/assets/img/firebase-cloud-firestore.svg"
                  alt="firebase-cloud-firestore"
                /><img src="@/assets/img/sql.svg" alt="sql" />
              </li>
              <li>
                <span>Socket.IO</span
                ><img src="@/assets/img/socket-io.svg" alt="socket-io" />
              </li>
              <li>
                <span>REST.API</span
                ><img src="@/assets/img/rest-api.svg" alt="rest-api" />
              </li>
              <li>
                <span>Languages: English, Russian, Serbian</span
                ><img src="@/assets/img/uk.svg" alt="eng" /><img
                  src="@/assets/img/rus.svg"
                  alt="rus"
                /><img src="@/assets/img/srb.svg" alt="srb" />
              </li>
            </ul>
          </div>
        </div>
        <div class="col m12 lg6 xl6 s12">
          <div class="skills">
            <a class="left top skills-icon"
              ><img src="@/assets/img/soft-skills.svg" alt="soft-skills"
            /></a>

            <h5>{{ translations.section_skills.softskills.title }}:</h5>
            <ul>
              <li
                v-for="skill in translations.section_skills.softskills.skills"
                :key="skill"
              >
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="CertsEmployment" class="fullHeightSection">
      <div class="row row-header">
        <h3>
          {{ translations.section_certs_employment.title }}
        </h3>
      </div>
      <div class="row">
        <div class="col m12 lg6 xl6 s12">
          <div class="skills certificates">
            <a class="left top skills-icon"
              ><img src="@/assets/img/certificate.svg" alt="hard-skills"
            /></a>

            <h5>
              {{ translations.section_certs_employment.certificates.title }}:
            </h5>
            <ul>
              <li
                v-for="cert in translations.section_certs_employment
                  .certificates.certs"
                :key="cert.title"
              >
                <a :href="cert.url" target="_blank">
                  {{ cert.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col m12 lg6 xl6 s12">
          <div class="skills employment">
            <a class="left top skills-icon"
              ><img src="@/assets/img/employment2.svg" alt="soft-skills"
            /></a>

            <h5>
              {{ translations.section_certs_employment.employment.title }}:
            </h5>
            <ul>
              <li>
                <a href="http://917smith.com/" target="_blank">917 Smith Inc</a>
                <p>I made some work: description goes here</p>
              </li>
              <li>Job 2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="Portfolio">
      <h3>{{ translations.portfolio }}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        accusantium amet assumenda blanditiis consequuntur dignissimos
        distinctio dolorem, facere fugiat hic illum laborum maiores molestias
        nam nulla obcaecati odio placeat praesentium suscipit voluptas? Aliquam
        aperiam atque deleniti deserunt dignissimos eius esse fugiat incidunt,
        ipsa iste labore laudantium molestias mollitia necessitatibus obcaecati
        pariatur quae quaerat quasi qui, quibusdam tempore tenetur, voluptas
        voluptate. Architecto consectetur dolores iste iure necessitatibus, nemo
        qui sint? Aspernatur at cupiditate nihil quaerat repellendus sint
        tenetur! Aliquam aperiam architecto atque autem consequatur consequuntur
        corporis deleniti dignissimos doloremque ea eligendi eum ex ipsam iure,
        laboriosam laborum minima nobis nulla quae, quidem reprehenderit
        repudiandae sequi voluptas! Asperiores blanditiis consectetur
        consequatur corporis delectus doloremque dolorum eveniet in incidunt
        labore molestiae nam nisi non nulla officia optio possimus quia
        reprehenderit sequi sit tenetur unde ut veritatis vitae, voluptatibus! A
        alias aliquid animi dignissimos doloremque dolorum earum enim esse eum
        expedita inventore molestiae molestias nesciunt nostrum obcaecati omnis
        possimus quaerat quibusdam ratione recusandae rem reprehenderit
        similique sint, suscipit tenetur veniam voluptatibus. Accusamus
        accusantium animi autem cumque cupiditate debitis doloremque eligendi
        eos esse, in incidunt ipsam ipsum iste iure laudantium nemo non nulla
        odio optio possimus quae quisquam quod repellendus reprehenderit tempora
        tenetur totam ullam.
      </p>
    </section>
    <section id="Resume">
      <div class="row">
        <div class="col download-cv">
          <button class="btn waves-effect cyan darken-2">Download CV</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['translations'],
  name: 'Home'
}
</script>

<style scoped>
ul:not(.browser-default) > li {
  font-weight: bold;
  padding: 0.5rem 2rem 0.5rem 1rem;
  text-align: left;
  list-style-type: none;
  border-left: 2px solid black;
}

ul:not(.browser-default) > li::before {
  position: relative;
  width: 15px;
  height: 15px;
  display: inline-block;
  content: '';
  left: -23px;
  top: 3px;
  border-radius: 50%;
  border: 3px solid black;
  background-color: white;
}
.skills {
  border: 1px solid gray;
  width: 100%;
  display: flow-root;
  position: relative;
  padding-left: 2.4rem !important;
  padding-bottom: 0.5rem;
  transition: box-shadow 0.5s;
}
.skills h5 {
  text-align: left;
  margin-bottom: 0 !important;
  margin-top: 1.6rem;
  padding-bottom: 1rem;
  border-left: 2px solid black;
  padding-left: 2rem;
}
.skills ul {
  margin-top: 0;
}
.skills ul li img {
  height: 20px;
  width: auto;
  margin-left: 5px;
  margin-right: 5px;
}
.skills-icon {
  position: absolute;
  border-radius: 50%;
  width: 45px !important;
  height: 45px !important;
  left: 1rem !important;
  top: 1rem !important;
  background-color: white;
  box-shadow: none;
  border: 2px solid black;
  padding: 5px !important;
}
.skills-icon img {
  width: 100%;
  height: auto;
}
.row-header {
  margin: 0 !important;
}
.row-header h3 {
  width: 100%;
}
.fullHeightSection .col {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
.fullHeightSection .row {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.fullHeightSection .col {
  display: flex;
}
.download-cv {
  justify-content: flex-start;
}
.certificates a,
.employment a {
  color: #2c3e50;
}
.certificates a:hover,
.employment a:hover {
  color: darkcyan;
}
</style>
