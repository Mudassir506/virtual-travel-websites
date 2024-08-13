import logo from './logo.svg';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  return (
    <>
<section id='home'>
  <nav>
    <div className='nav1'>
      <div className="leftnav">Virtual Travels</div>
      <div className="rightnav">
        <div className="top">
          <div className="loc"></div>
          <div className="findus">Findus</div>
          <div className="input">
            <input type="text" placeholder='search'/>
          </div>
        </div>
        <div className="buttom">
          <div className="tool">CALL US TOOL FREE!</div>
          <span className='no'>1-800-987-8989</span>
        </div>
      </div>
    </div>
    <div className='nav2'>
      <ul>
        <a href="#home"><li>HOME</li></a>
       <a href="#tour"><li>TOURS</li></a> 
        <a href="#aboutus"><li>ABOUTUS</li></a>
        <a href="#travelblog"><li>TRAVEL BLOG</li></a>
       <a href="#contactus"><li>CONTACTUS</li></a> 
      </ul>
    </div>
  </nav>
  <div className="main1">
  <div className="bg"></div>
  <div className="mainbox"> 
  <span className="fspan">LET US TAKE YOU TO YOUR</span>
  <span className="sspan">DREAM DESTINATIONS</span>
  <div className="tspan">
    <div className="continents">
      <select name='continents'>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="America">America</option>
        <option value="Austrila">Austrila</option>
      </select>
    </div>
    <div className="countries">
      <select name="countries" >
      <option value='unitedkingdom'>UNITED KINGDOM</option>
      <option value="SPAIN">SPAIN</option>
      <option value="TURKEY">TURKEY</option>
      <option value="THAILAND">THAILAND</option>
      <option value="PAKISTAN">PAKISTAN</option>
      <option value='Italy'>Italy</option>
    </select>
    </div>
    
    <div className="budget">
      <select name="budget">
      <option value="1000$">1000$</option>
      <option value="2000$">2000$</option>
      <option value="3000$">3000$</option>
      <option value="4000$">4000$</option>
      <option value="5000$">5000$</option>
      </select>
    </div>
    <div className="find">FIND YOUR TOUR</div>
  </div>
  </div>
  </div>
  
</section>
<section id='tour'>
<div className="bestoff">
  <div className="best1">BEST OFFERS</div>
  <div className="best2">CHEAK OUT OUR TOP-RATED TOURS</div>
</div>
<div className="main21">
 <div className="img1">
  <div className="img11"></div>
  <div className="uk"><span className="uk1">UNITED KINGDOM</span><span className="uk2">$5000</span></div>
 </div>
 <div className="img1">
 <div className="img12"></div>
 <div className="spa"><span className="spa1">SPAIN</span><span className="spa2">$4000</span></div>
 </div>
 <div className="img1">
 <div className="img13"></div>
 <div className="tur"><span className="tur1">TURKEY</span><span className="tur2">$3000</span></div>
 </div>
</div>
<div className="main22">
<div className=" img1">
<div className="img21"></div>
<div className="thai"><span className="thai1">THAILAND</span><span className="tahi2">$2000</span></div>
</div>
 <div className=" img1">
 <div className="img22"></div>
 <div className="pk"><span className="pk1">PAKISTAN</span><span className="pk2">$1000</span></div>
 </div>
 <div className=" img1">
 <div className="img23"></div>
 <div className="ind"><span className="ind1">INDIA</span><span className="ind2">$3000</span></div>
 </div>
</div>
</section>
<section id='aboutus'>
<div className="main3">
<div className="bestoff why choose">
  <div className="best1 best11">WHY CHOOSE US?</div>
  <div className="best2 best21">A BRAND NAME YOU CAN TRUST AND REPLY</div>
</div>
<div className="main31">
  <div className="main311 main312">
    <div className="money"></div>
    <div className="money1">AFORTABLE PRIZE</div>
    <div className="money2">GURANTEE</div>
    <div className="money3">At our travel service, we provide you with the best travel experiences at affordable prices. With JS Baray, we prioritize your needs and ensure a safe and memorable journey. Book your spot today and enjoy a hassle-free travel experience!</div>
  </div>
  <div className="main311 main313">
  <div className="moneyearth"></div>
    <div className="money1 earth1">WIDE VARIETY OF</div>
    <div className="money2 earth2">DESTINATION</div>
    <div className="money3 earth3">Explore the world with our extensive selection of destinations. Whether you're looking for a serene beach getaway, an adventurous mountain trek, or a cultural city tour, we've got something for every traveler. Discover your perfect destination and start your journey with us today!</div>
  </div>
  <div className="main311 main314">
  <div className="moneylike"></div>
    <div className="money1 like1">HIGHLY QUALIFIED</div>
    <div className="money2 like2">SERVICE</div>
    <div className="money3 like3">Experience top-tier service with our team of travel experts. Our highly qualified professionals are dedicated to making your trip seamless and enjoyable, from planning to execution. Trust us to handle every detail with care and expertise, ensuring your journey is nothing short of exceptional.</div>
  </div>
</div>
</div>

</section>
<section id='travelblog'>

<div className="bestoff why choose">
  <div className="best1 ">TESTONOMIALS</div>
  <div className="best2 ">WHAT OUR COUSTOMER SAYS ABOUT US</div>
</div>
<div className="main31">
  <div className="main311 main312">
    <div className="money main40"></div>
    <div className="money1 main41">AFORTABLE PRIZE</div>
    <div className="money2 main42">GURANTEE</div>
    <div className="money3 main43">Discuss the best time to visit, must-see attractions, hidden gems, local cuisine, and cultural tips. Include recommendations for accommodation, transportation, and safety advice.</div>
    <span className='mud'>JOHN SMITH</span>
  </div>
  <div className="main311 main313">
  <div className="money main40"></div>
    <div className="money1 main41">WIDE VARIETY OF</div>
    <div className="money2 main42">DESTINATION</div>
    <div className="money3 main43"> Share packing tips, how to find cheap flights, booking the best hotels, staying healthy while traveling, and navigating language barriers. You can also include advice on using travel apps, dealing with travel anxiety, and sustainable travel practices.</div>
    <span className='mud'>SUSAN HILL</span>
  </div>
  <div className="main311 main314">
  <div className="money main40"></div>
    <div className="money1 main41">HIGHLY QUALIFIED</div>
    <div className="money2 main42">SERVICE</div>
    <div className="money3 main43">Offer tips on photographing landscapes, local people, and architecture. Share advice on the best times for photography, and the gear you recommend. You can also create photo essays that visually tell the story of a place.</div>
    <span className='mud'>DAVID WILLIAM </span>
  </div>
</div>
</section>
<section id='contactus'>
  <div className='main5'>
  <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 className='muza'>Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We’d love to hear from you! Whether you have a question about our travel guides, need trip planning advice, or just want to share your own travel stories, we’re here to help. Feel free to reach out to us using the contact information below, and we’ll get back to you as soon as possible..</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto v display:flex align-item:center justify-content:center ">
      <div class="flex flex-wrap -m-2 display:flex align-item:center justify-content:center">
        <div class="p-2 w-1/2">
          <div className="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full ">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="int">
          <button class="flex mx-auto text-blue border-50px py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"x>Button</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500">example@email.com</a>
          <p class="leading-normal my-5">49 Smith St.
            <br/>Saint Cloud, MN 56301
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</section>
    </>
  );
}

export default App;
