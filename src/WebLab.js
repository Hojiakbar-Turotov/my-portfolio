import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './weblab/style/main.scss';
import App from './weblab/App';
import Labs from './weblab/labs/Labs';
// 6-sinf
import MassaniUlchash from "./sinov/6-sinf/shayinlitaroziyordamidajismmassasinio'lchash/MassaniUlchash";
import MassaniUlchashInfo from "./sinov/6-sinf/shayinlitaroziyordamidajismmassasinio'lchash/info/Info";
import ZichlikniAniqlash from "./sinov/6-sinf/qattiqjismningzichliginianiqlash/ZichlikniAniqlash";
import ZichlikniAniqlashInfo from "./sinov/6-sinf/qattiqjismningzichliginianiqlash/info/Info";
import KuchlarniUlchash from "./sinov/6-sinf/dinamometryordamidakuchlarnio'lchash/KuchlarniUlchash";
import KuchlarniUlchashInfo from "./sinov/6-sinf/dinamometryordamidakuchlarnio'lchash/info/Info";
import RichagMuvozanatSharti from "./sinov/6-sinf/richagningmuvozanatdabo'lishshartinio'rganish/RichagMuvozanatSharti";
import RichagMuvozanatShartiInfo from "./sinov/6-sinf/richagningmuvozanatdabo'lishshartinio'rganish/info/Info";
import TemperaturaniUlchash from "./sinov/6-sinf/termometryordamidahavovasuyuqliktemperaturalarinio'lchash/TemperaturaniUlchash";
import TemperaturaniUlchashInfo from "./sinov/6-sinf/termometryordamidahavovasuyuqliktemperaturalarinio'lchash/info/Info";
import YoruglikQaytishi from "./sinov/6-sinf/yassiko'zguyordamidayorug'likqaytishinio'rganish/YoruglikQaytishi";
import YoruglikQaytishiInfo from "./sinov/6-sinf/yassiko'zguyordamidayorug'likqaytishinio'rganish/info/Info";
import YoruglikningSpektrgaAjralishi from "./sinov/6-sinf/shishaprizmayordamidayorug'likningspektrgaajralishinio'rganish/YoruglikningSpektrgaAjralishi";
import YoruglikningSpektrgaAjralishiInfo from "./sinov/6-sinf/shishaprizmayordamidayorug'likningspektrgaajralishinio'rganish/info/Info";
// 7-sinf
import TekisTezlanuvchanHarakat from './sinov/7-sinf/tekistezlanuvchanharakat/TekisTezlanuvchanHarakat';
import TekisTezlanuvchanHarakatInfo from './sinov/7-sinf/tekistezlanuvchanharakat/info/Info';
import IshqalanishKoeffitsienti from './sinov/7-sinf/ishqalanishkoeffitsienti/IshqalanishKoeffitsienti';
import IshqalanishKoeffitsientiInfo from './sinov/7-sinf/ishqalanishkoeffitsienti/info/Info';
import KinetikEnergiya from './sinov/7-sinf/kinetikenergiya/KinetikEnergiya';
import KinetikEnergiyaInfo from './sinov/7-sinf/kinetikenergiya/info/Info';
import MexanikIsh from './sinov/7-sinf/mexanikish/MexanikIsh';
import MexanikIshInfo from './sinov/7-sinf/mexanikish/info/Info';
import PrujinaBikrligi from './sinov/7-sinf/prujinabikrligi/PrujinaBikrligi';
import PrujinaBikrligiInfo from './sinov/7-sinf/prujinabikrligi/info/Info';

export default function WebLab() {
    return (
        <>
          <Router>
            <Switch>
              <Route path='/' exact component={App} />
              <Route path='/labs' exact component={Labs} />
              {/* 6-sinf */}
              <Route path='/massaniulchash' exact component={MassaniUlchash} />
              <Route path='/massaniulchash/malumot' exact component={MassaniUlchashInfo} />
              <Route path='/zichliknianiqlash' exact component={ZichlikniAniqlash} />
              <Route path='/zichliknianiqlash/malumot' exact component={ZichlikniAniqlashInfo} />
              <Route path='/kuchlarniulchash' exact component={KuchlarniUlchash} />
              <Route path='/kuchlarniulchash/malumot' exact component={KuchlarniUlchashInfo} />
              <Route path='/richagmuvozanatsharti' exact component={RichagMuvozanatSharti} />
              <Route path='/richagmuvozanatsharti/malumot' exact component={RichagMuvozanatShartiInfo} />
              <Route path='/temperaturaniulchash' exact component={TemperaturaniUlchash} />
              <Route path='/temperaturaniulchash/malumot' exact component={TemperaturaniUlchashInfo} />
              <Route path='/yoruglikqaytishi' exact component={YoruglikQaytishi} />
              <Route path='/yoruglikqaytishi/malumot' exact component={YoruglikQaytishiInfo} />
              <Route path='/yoruglikningspektrgaajralishi' exact component={YoruglikningSpektrgaAjralishi} />
              <Route path='/yoruglikningspektrgaajralishi/malumot' exact component={YoruglikningSpektrgaAjralishiInfo} />
              {/* 7-sinf */}
              <Route path='/tekistezlanuvchanharakat' exact component={TekisTezlanuvchanHarakat} />
              <Route path='/tekistezlanuvchanharakat/malumot' exact component={TekisTezlanuvchanHarakatInfo} />
              <Route path='/prujinabikrligi' exact component={PrujinaBikrligi} />
              <Route path='/prujinabikrligi/malumot' exact component={PrujinaBikrligiInfo} />
              <Route path='/ishqalanishkoeffitsienti' exact component={IshqalanishKoeffitsienti} />
              <Route path='/ishqalanishkoeffitsienti/malumot' exact component={IshqalanishKoeffitsientiInfo} />
              <Route path='/mexanikish' exact component={MexanikIsh} />
              <Route path='/mexanikish/malumot' exact component={MexanikIshInfo} />
              <Route path='/kinetikenergiya' exact component={KinetikEnergiya} />
              <Route path='/kinetikenergiya/malumot' exact component={KinetikEnergiyaInfo} />
            </Switch>
          </Router>
        </>
    )
}
