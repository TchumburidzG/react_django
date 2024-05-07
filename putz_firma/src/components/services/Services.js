import './services.css'
import { Messenger } from '../socMedia/Messanger';
import auto from '../../assets/pics/auto.jpg';
import present from '../../assets/pics/present.avif';
import instruction from '../../assets/pics/instruction.avif';
import floor from '../../assets/pics/floor.jpg';
import afterRepair from '../../assets/pics/afterrepair.jpg';
import general from '../../assets/pics/general.jpg';
import furniture from '../../assets/pics/furniture.jpeg';
import vitrine from '../../assets/pics/vitrine.jpg';

function Services(){
  return (
    <div className="services-container">
      <div className="services-title">
        ჩვენი სერვისები
      </div>
      <ul className='list-services'>
        <li>
          <img src={auto} className='services-icon' alt="უფასო მიტანა, free delivery" />
          <div className='service-offers main-offers'>
            აპარატის თქვენთან მოტანა და წაღება <span>10 ლარი</span> თბილისის მასშტაბით
          </div>
        </li>
        <li>
          <img src={present} className='services-icon' alt="services სერვისები" />
          <div className='service-offers main-offers'>
            სპეციალური ანტიალერგიული ფხვნილი <span>საჩუქრად</span>
          </div>
        </li>
        <li>
          <img src={instruction} className='services-icon' alt="instuction ინსტრუქცია" />
          <div className='service-offers main-offers'>
            მოხმარების ინსტრუქტაჟი, <span>საუკეთესო შედეგი</span>სთვის
          </div>
        </li>
      </ul>

      <div className='other-services'>
        <div className='services-title'>
          ჩვენ ასევე გთავაზობთ
        </div>
        <ul className='list-services'>
          <li>
            <div className='service-offers other-offers'>
              გენერალურ დალაგებას
            </div>
            <img src={general} className='services-icon' alt="services სერვისები" />
          </li>
          <li>
            <div className='service-offers other-offers'>
              რემონტის შემდგომ დალაგებას
            </div>
            <img src={afterRepair} className='services-icon' alt="clean service, რემონტის შემდგომ დალაგება" />
          </li>
          <li>
            <div className='service-offers other-offers'>
              რბილი და მყარი იატიკის წმენდას
            </div>
            <img src={floor} className='services-icon' alt="celan floor იატაკის მოწმენდა" />
          </li>
          <li>
            <div className='service-offers other-offers' >
              ავეჯის ქიმწმენდას
            </div>
            <img src={furniture} className='services-icon' alt="funiture cleaning ავეჯის წმენდა" />
          </li>
          <li>
            <div className='service-offers other-offers'>
              ვიტრაჟების წმენდას
            </div>
            <img src={vitrine} className='services-icon' alt="ვიტრინები" />
          </li>
        </ul>
        <div className='contact-us'>
          გვნახე ფეისბუქზე
          <div className='my-messenger' >
            <Messenger messengerUrl={'https://www.facebook.com/cleanservicegeo'} />
            <a href='https://www.facebook.com/cleanservicegeo' >
              cleanservice.ge
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services;