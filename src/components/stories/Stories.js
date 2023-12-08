import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import StoriesBlock from "./StoriesBlock"

import logo1 from "../images/Hashish.jpg"
import logo2 from "../images/formula.png"

class Stories extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title1: "Я жил в страхе, но не успокоился",
            info1:  <div className="story-info" >
                        Никите 21 год, он из интеллигентной петербургской семьи. Уже полтора месяца он в реабилитационном центре проходит лечение от наркотической зависимости. Чтобы "дойти до своего дна", ему понадобилось всего полтора года.   
                        <br />
                        <br />
                        "Попал я сюда из-за наркотиков, употреблял системно их недолго, от якобы легких до синтетики. Все началось в 2013 году, я первый раз попробовал покурить, мне было 13 лет. Я был всегда смелым мальчишкой и дерзким, не особо боялся родителей. У меня был официально зафиксирован синдром гиперактивности, я был очень беспокойный, мне давали успокоительные в детстве какое-то время. 
                        <br />
                        <br />
                        И вот мне приятель дал попробовать покурить. Спустя месяц попробовал еще раз, так потихонечку, летом, шаг за шагом я продолжил. Ближе к 15 годам я покуривал раз в две недели точно.  
                        <br />
                        <br />
                        Позже попробовал галлюциногенные наркотики, сейчас и смешно, и страшно, но мне тогда показалось, что я увидел, как устроен мир, анализировал поведение людей. На самом деле я ошибался, потому что забывал про свое психическое здоровье, увлекаясь мыслями о чужом. Мне даже нравилось не повеселиться в компании, на тусовке, а взять одного компаньона и поговорить, погулять по улицам Петербурга, посмотреть на прекрасное. Но сейчас я понимаю, что можно было и по-другому, без этого всего.  
                        <br />
                        <br />
                        Шло время, в 2018 году по своей ужасающей глупости я решил устроиться работать кладменом. Проработал полтора месяца. Устроился в один магазин, взял наркотики и понял, что куда-то я не туда иду, и весь "товар" забрал. Веселился с друзьями месяца полтора. Потом появились опять тупые мысли, и летом я снова туда устроился. Все мои родственники — порядочные творческие люди, и узнать такое о своем единственном сыне и внуке было ужасно. Много я им навредил, бабушка с дедушкой чуть от меня не отказались. Я жил в страхе, но не успокоился.  
                        <br />
                        <br />
                        Родители решили меня отправить в армию, я взял академ в музыкальном училище. В армии попал в оркестр, думал, что это лучшее наказание, которое могло быть. Послужил, первый месяц я ничего не употреблял, но потом мне друзья стали приносить наркотики. Я покуривал периодически. Так я провел год в армии. Демобилизовался, друзья мне организовали "праздник". Они принесли таблетки и предложили мне. Спустя пару недель я попробовал синтетику и стал употреблять все чаще.  
                        <br />
                        <br />
                        Спустя полгода я попал в реанимацию. Врачи сказали, если бы привезли чуть позже, я бы не выжил. Родителям наврал, что перепил, но они поняли, что это не так, и мне пришлось признаться".  
                        <br />
                        <br />
                        Никита близко общается со своей мамой и всегда старался ей обо всем рассказывать. Но, как он сам говорит, ему легко ее обмануть.
                        <br />
                        <br />
                        "Я брал ее деньги, говорил, что на еду, а тратил на наркотики. Мог залезть в телефон и незаметно перевести себе на Сбербанк Онлайн. Осенью 2020 года я влюбился, и, когда у нас были какие-то ссоры, шел употреблять, было, что 20 дней подряд. Набрал микрозаймов, бабушке пришлось все это выплачивать, потому что я только веселился.
                        <br />
                        <br />
                        <div className="quote">
                        В край я ошалел этой весной 2021 года, я не мог без наркотика, нужно было каждый день. Еще я старался покупать что-то дорогое, "качественное", тогда не понимал, какое тут может быть качество, если это все тебя убивает?  
                        </div>
                        <br />
                        И в один день я работал за компьютером, неожиданно пришли люди домой и меня увезли в "ребцентр". За это я родителям очень благодарен, не злился на них ни секунды, сам бы вряд ли остановился. Я доволен тем, что я на лечении, занимаюсь спортом, здесь очень клево, ем как не в себя. Рад, что так все закончилось, будущее за этим есть большое, а там, в употреблении, вряд ли будущее было. У меня уже пошли мысли попробовать что-то потяжелее, слава богу, что не попробовал".   
                    </div>,
            title2: "Как так можно жить? Адский круг этот не отпускает",
            info2:  <div className="story-info">
                        Валерии 20 лет, на фотографиях она — стройная длинноволосая брюнетка с длинными ресницами и яркими чертами лица. Выглядит благополучной, здоровой, ухоженной девушкой. Но была такой она не всегда.
                        <br />
                        <br />
                        "С 16 до 19 лет кололась я страшно, каждый день, была судимость, до сих пор она есть, три года условно за кражу. Начали выпадать волосы, я весила 42 килограмма, все из дома вынесла — мамино золото, технику. Начала употреблять я лет с 12. У меня неполная семья была, всегда были какие-то проблемы дома. Мне тема наркотиков была интересна, где-то в 12 лет я начала выпивать. Мой старший брат двоюродный встречался с девушкой-цыганкой, вместе покуривали, и через пару месяцев мы попробовали синтетику. Так и началась моя программа. Это было тогда модно". 
                        <br />
                        <br />
                        Профессор Инна Зражевская отмечает, что мода на нездоровый образ жизни может стать решающим фактором в пользу употребления у подростка. "Культ "звездности" и копирования всего за "звездами", которые сегодня делают PR в основном на "шикарной" жизни, неотъемлемыми атрибутами которой являются наркотики и алкоголь, поток абсолютно прозрачных намеков о радостях и безопасности злоупотребления с экранов ТВ и смартфонов — мы недооцениваем значимость влияния всех этих аспектов, которые становятся поведенческими шаблонами юношей и девушек. 
                        <br />
                        <br />
                        У подростков еще не сформированы полностью аналитические функции мышления, поэтому способность здраво проанализировать ближайшие и отдаленные последствия того, что тебе предлагают сделать, недостаточная, решение принимаются чаще импульсивно, "на эмоциях" либо по аналогии с действиями своих лидеров".
                        <br />
                        <br />
                        "Я попадала на реабилитации, в больницы, по 28 дней три раза отлежала, там находила только больше знакомых наркоманов и снова шла употреблять. В итоге в 14 лет я попала на первую серьезную реабилитацию на полтора года, у меня не было осознания, что есть проблема, что я зависимая.  
                        <br />
                        <br />
                        Вышла в 16 лет и была уверена, что все будет нормально, про наркотики я забыла. Через два-три месяца я начала выпивать, а потом вернулись и наркотики. Начала колоться.
                        <br />
                        <br />
                        Приходилось делать закладки, потому что денег не было, а доза все росла и росла. Последнее время я жила в подъезде, у меня ни вен не было, ни здоровья, вся разваливалась. Просыпаешься каждый день и думаешь: "Господи, как так можно жить?" Адский круг этот не отпускает. Ты понимаешь, что не найдешь дозу — будет ломка, а может, и смерть. Очень сложная такая жизнь.  
                        <br />
                        <br />
                        Родители помогли, нашли реабилитацию, пробыла там десять месяцев, недавно вышла. Осознание есть, что плохо, что хорошо. Но даже сейчас сложно жить. Но физически я себя чувствую просто прекрасно, я наконец-то сплю нормально, ем нормально, не надо никуда бежать, чтобы намутить. Сейчас я трезвая, живу с мамой на море, восстанавливаю свое здоровье и отдыхаю".     
                    </div>
        }
    }

    render() {
        return(
                <div className="container">
                    <div className="storiesMain">
                        <StoriesBlock background={logo1} title={this.state.title1} info={this.state.info1} />
                        <StoriesBlock background={logo2} title={this.state.title2} info={this.state.info2} />
                        
                    </div>
                </div>
        )
    }
}

export default Stories