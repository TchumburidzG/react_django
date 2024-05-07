import { WhatsApp } from '../socMedia/Whatsapp';
import { Messenger } from '../socMedia/Messanger';
import { Instagram } from '../socMedia/Instagram';
import { TikTok } from '../socMedia/TikTok';
function Contact() {
  return (
    <div>
      <div className="contact-info">
        <p>ტელეფონი:+995 511 33 44 77</p>
        <p>მაილი: infocleaningtools@gmail.com</p>
        <p>

        </p>
        <WhatsApp />
        <Messenger />
        <Instagram />
        <TikTok />
      </div>

      <div className="google-maps">
        <div className="name-maps">
          <a href="https://www.google.com/maps/place/CleanService+%E2%80%A2+%E1%83%93%E1%83%90%E1%83%A1%E1%83%A3%E1%83%A4%E1%83%97%E1%83%90%E1%83%95%E1%83%94%E1%83%91%E1%83%98%E1%83%A1+%E1%83%99%E1%83%9D%E1%83%9B%E1%83%9E%E1%83%90%E1%83%9C%E1%83%98%E1%83%90/@41.7860708,44.7441969,120m/data=!3m1!1e3!4m14!1m7!3m6!1s0x40446fd9be893419:0x223cf5bc33c6a33!2zQ2xlYW5TZXJ2aWNlIOKAoiDhg5Phg5Dhg6Hhg6Phg6Thg5fhg5Dhg5Xhg5Thg5Hhg5jhg6Eg4YOZ4YOd4YOb4YOe4YOQ4YOc4YOY4YOQ!8m2!3d41.7861859!4d44.7442589!16s%2Fg%2F11kt8sgrk7!3m5!1s0x40446fd9be893419:0x223cf5bc33c6a33!8m2!3d41.7861859!4d44.7442589!16s%2Fg%2F11kt8sgrk7?hl=ka&entry=ttu" target='_blank' rel='noopener noreferrer'>
            გვიპოვე გუგლის რუკაზე
          </a>
        </div>
        <iframe className="besika"
          title="google maps"
          allowFullScreen={true}
          loading="async"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.0652523722792!2d44.74425890000001!3d41.7861859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446fd9be893419%3A0x223cf5bc33c6a33!2zQ2xlYW5TZXJ2aWNlIOKAoiDhg5Phg5Dhg6Hhg6Phg6Thg5fhg5Dhg5Xhg5Thg5Hhg5jhg6Eg4YOZ4YOd4YOb4YOe4YOQ4YOc4YOY4YOQ!5e1!3m2!1ska!2sde!4v1709988304038!5m2!1ska!2sde"
        >
        </iframe>
      </div>
    </div>
  )
};
export default Contact;