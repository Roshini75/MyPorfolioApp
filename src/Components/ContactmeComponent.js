import React from 'react';

class ContactmeComponent extends React.Component{
    constructor(props){
        super(props);

    }
 render(){
    return(
       <div id="contactme" class="footer-section">
       <div class="row">
          <h2 data-aos="slide-left" class="footer-heading">Contact me</h2>
       </div>
       <div class="row">
                {/* <div class="col span-1-of-2">
                    <ul class="footer-nav">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                </div> */}
                {/* <div class="col span-1-of-2"> */}
                    <ul class="social-links">
                        <li><a target="_blank" href="https://www.linkedin.com/in/roshini-tadi-5ab6b4193/"><i class="ion-social-linkedin"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Roshini75"><i class="ion-social-github"></i></a></li> 
                        <li><a target="_blank" href="https://www.facebook.com/roshinirockzzzzz"><i class="ion-social-facebook"></i></a></li>           
                    </ul>
                {/* </div> */}
            </div>
            <div>
                {/* <div class="row">
                <p>
                    Copyright &copy; 2019 reserved by Omnifood. All rights reserved
                </p>
                </div> */}
                <div class="last-section">
                    <p  data-aos="slide-right">
                    Copyright &copy; 2020 reserved by Roshini Tadi. All rights reserved
                    </p>
                     <img  data-aos="slide-left" className="footer-image"  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxALEBAQEBAJEBAJCxYLDQkJDRsIFQcWIB0iIiAdHx8kKDQsJCYxJx8fLTstMT1AOjAwIys9QD84NzQ5LisBCgoKDQ0NFQ4OFSsZFRk3Kys3Ky03Ky0rNzcrKystLS0tKy03KysrOCsrKystKystKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xAA8EAABAwIEAwUGBAUDBQAAAAABAAIRAyEEEjFBBQZREyJhcYEHMkJSkaEUYrHwI3LB0eFDY/EVM0SCkv/EABkBAAIDAQAAAAAAAAAAAAAAAAIDAAEEBf/EACIRAAICAgMAAgMBAAAAAAAAAAABAhEDIQQSMTJBEyJRYf/aAAwDAQACEQMRAD8AofE3jtL6FhKrL3XPmrdzZXYyq2II7Mjpqq52rOivEjPKdLwZynOAZmeABMnQWRy5nRW72c0WPxQ7rTDdxm3CY1WwO96ouXCeD4l7GBrHBoaO/U7gKsGC5ZIvUewH/bGY/UqztEruRJlOT8NEYpEbhOD0KOjAT87++VIMaBYD0FoSrWBHAS+rfoXYRqUszXDTM0jyXl7ifDzh6tVjtaVd7CYmSCvUleqGAkxYXm0LzxzYwNxuJLS0g4gvBFwEcdFN2V2hhs+th1O6kMPQp0zmgF3zO2SEHW0Rf8qa1MSXWH16ovQSVqYu2oG0dEUPL7NInzUTTeB7177Gcyd4Qtmw9XnVEkgrJnD9oyzmk7+fqpLDVGmwzB2vZv7s+SQ4fVLdMhbqROaPROMRTc64EQdNcqqgkSDMaWxqRplNi1SOD5gdRLYLnBlw13wqqGsZvILfUBB1Vwv99UuUUHE3HgXGqWNYMpbma27OikY8FjPLfEXUazHskS+HAGQtwwzszWmRDhPWEqMLdBN0NCiEJ7XhIEKOIPYQXJS5C5CrqX2EpQSsIKdSdjytj6r61nGSw2nZMxQJ3+l5T7FOGaYi+kRKSwh7ro+a260RX8M7kv4Nvw5Gs9FqPsfp0ab3Go4do8iA5ugH+VQ20yIL9t3WyqW4Pxb8I9rmatIPTMj6yYtzR6KcuKrct83UsW1rXwx57ozOkPVoAm4j9ZS5Jr0NST8Oyi1aoYCSgbKtc48abgqD3k3DSKbN6hVBFZ9o/NpoN7Cmf4lUS4tMdgFkn4kk3k7uJ7xRsfjXYl7qjyS6obk3JSExH7lFFEFqmIJBA3TSDt9E4awHp4DonTMI0gG0wY3lEREQ6W+G/QoMcCbl3n0UlXwZ6AiNB8KbOwoFzB+xapZdD3h73Nux7HR8LjkLvqrDhOIki4LHdPeB/sqrQw7Tocp2DrD6qVwuOc0ZKga8Du5Xi7PIqFom8QW1QOvzC30Ua8Opu3IPrCIzEhpMXaPhPdLE4dVDhOoIvtCBhoccNrAEXNzMExC2rkjihxFHKdaY1O6whr8h2vsbyrhybzGcK9t7G3VA9Ow/VRslUXKSIXKNcVWh4NnjN5o5CoWEQIXUFCHIQXSUFCHmnH4MZj7xM+7EwmNPD5JgtG+klWmrh69HPlZSqF597MBuoTG4GvVl3Y1hJv2bcwK1Y0kJy21oYvrtNru8XGAkKhLCCAANouhXwlSkAX06zQ6we9hYHLtK4i8HwmE/qvozP/SQwGNi5c5pbcHotg9nnMpxTOxqEl1OIefjCw9lB4OhIarnyPVFCqH5iDIBmwhLybjsuGpaNvxD8rSfTzWJe1Hi4rVhQa6RQaS8D4CdlqXHuLNo4Z1Y6MpZheM5iy88Y3EurPfUeSXVXFznfNKzI1IbARf7dERz+mvXojnfr+iKGx+4RFiuHBcfP7KbweEcYt5xeUy4Xh85En/C0jgXCWADNc6ws+bMo6NOHF22VRvCnuvlMD1TnDcsPqSdvJaDS4aydBHRSFLCDQAeiR+aT8NKwxRlfEOV30wCL+HVQ1TCuYIeDbciYW04rAg7KvcY4K17XENGnTVEs7XoMuOn4ZXUzMNjIG+sJfC1+luomZSnGcGaLiI09VENfB6dD0WtNSVmOScXRMOxRbIcAWjS12J1h65Y4Fpsd9iohtfO294sRqlqFaPJ23yoXGyKRvfIXEfxOGaJk0e4Z2Gys8LLPZVxACo6mXT2jNNFqYKDwkvQELrNdJ8EF1gVlBaoE2XVx111UyGF4mheQLE7GYXGOey4Lxvqq/T4lUoAidyZJnKnNDjwc0tdrFj8y1vjv6YlcqP2iTx7ximZK2ZwnM34cp6qPrcKotYSBUBYQJLvfUXU4lULrG028VI0XdpTIJNyD1VdZwatlOUJptIJRxDaQsAQbEdUSk4h0tOUTI2hIOBYQ07OsR8SXrggSNgjnLQuJO81cwl+Cp0Ju5wzW9+FQXugFOsXWLnQSSGjSZhR9VxJA/ZSUh6WjueUejUkwR6hNXk/8Jxw+ia72tGrjFt1T0rCirLVy5he0e3KJg3PRafw/CFrQmHLfB24em2wmJJVkosC5c5dpWdTFFRjQWnTI1TlrV2F0EKkMCuCa4mjI/d09BXcgKsoyvmvA5qj7W0tuqJjcKWHoN/Fbtxng4rAkRPl7yzDmrhL6V8pGxgQCtOHJT6szZ8d/sipUQWmNk6psE+ZTdjJMbhPMKA6Wmx/VazCWfkvFHDYmkSf9QAkHZb5TdmAPVeZ6VR1J7XX7rvovQ3LWM/FYam+buYJ80prYf0Sq7MIQhCoEIUEaFxQs8tNf2geDHnpF0xIyHy9IRmkifEpN7sxM7+i6jZzkhy0SARqNQrLwUsyuLwCRAaJi6heDls3DTaO8YUnVhjCGwB4XhIy7aQ/CqTYvi8OCcwy+HimmJbDC64iw2UlwWk7FMa1gcTOWegROdmMwradBmrR33AznKT2+g9WVAujrJ+6SLIEnU2A6rrnT6+krr7nysNlYwSqsFhNz6qycp4CoxwqNaC7Zz9GqEoYbtKzWx7zh4WV3q4KtTb/AAzGdvlCy8jJS6/01YMd7Jn/AKljKQ90EflICcYbmevMGifWyq2K4PUdhXOP4g4jMHAyXNqDwjfzUpy/wMdg+pUrPaSB2bKktIO9knqutocnTLxg+LdoBIjNsdlICoCJVD4BiKgq9mSXAzfpCv2HoS2eo+iQaBpVxwYfJRGL5vZRJHZ1SAYzREonHcS+mSym1pcfiOyqvHcPisMyjVDw78RVLHFsRQ9UeNdvAMjpWW2hzP29206w6S03Rq5p40Fj2EFw0eIVc4R+Mfh31+0gU6payhUEfiAOhU9wTHVaw/iUajSN3NyyrmupUNqzPeZOXXYFxqNBLM0yfhUSzDOJzBwnrqte5kwHb4erI/0iR4GFjDcS5lgfAeC1YJuSaZkzwUXYo7O1579MmdBdbb7KsWauFgn/ALbsvksGrVDmGk6kha97GMQSyq0k7ETedU6a0Z0zVwurkoEpZYEFwlBQh5YoU2uD9JGhDtLqLxDC1xHQ/VOGPAzeRTR75Nv7roSMcR1gHQ4efmrNwnhtTHVBSYHS+0/KOpUXyzwarjarQxriXmGgCJW7cv8ALtLhlIwAalQTUqdfAJE57pDUqRD0OG0uCYOGjO5gzvc63aFY5x7HGvWc8nNexWse0DGhtOCYBaZHjssTrkk7XOyWXBAaZIRg6/rKRYboOfr+5VjkWTlvCmriWHWBfwWu4Hh7S0SBp0lZh7P3jt3E/C0C94Wx4EiNvDwXO5LuZ0uOv0GpwEaBv0Q/AuOzR6QpgJPEVAwFKQ5ogaXDm06mY3PVWKj7qh2VC92kA/dTVAd1WtlEPj+Fis7Na+o6pkeCD3XUw5vy7FT9SoGG/wBeiVa8H/CkdEeyLw3D2tAAZAGg+VPqeGDdE6ELhKkl9soiuNjs6FV3yUnH7Lz090EkmwM+S3vnfECjgMS7/ZLfrZed6lYutsTPmtfFWmYeV6kHDsxJ6rWPYs6HVfJt+qyagFqfsbdFSoJ1p6aSVoyeGZG1gIItMyEZLLOFcRoQUIeSaTHEkQbynPBeB1cfiGUWNdLzmcY9xu5Q4eH1qzWU2uc+o/K1jb5lvHI3Ko4bTz1ADXrt7x17IdFsySrRlj/R3yry5S4ZTAABeW955Hu+ClMc+BHWydEqP4q6Gz0ufyhZ14E3Zk3tJxoLgyffvH78lmrjclWnnPG9viKjgIaLNv7yqj+nqfBEMiqRyUVdJXHC/l91YZZ+SKuXEHW7PqtjwGIlo8tNFhPLmI7HEUydHHKdpWy8NkgRsPqudyVUzo8WVxosYxQAUfiq5qTfyCj+LV3UWF0EhjZyjVygsJzWHS00a4c0ZiHWhJim0afWWGjxJlJwDnNn3YmIU7Tx7A2cwhUtmKZXhxY9pdoeqd0ANDUlvylsQptBuDLQ/EsqtMEX9UyoYvI7KTvbxTXDY3DUBAc2Zv8AlURxbj2Gzjs6gcXODS2mC6FHdAVXqLmyuDuh2vioDB4pxEHbfqnbHkoe1lPRXParxDJguzH/AJNUM+l1i2VaB7TeKNrYmlh2mRhGzUi8uP8AhUbENg+f2XU48agjl55XMGH/AHstP9j4Aq1pNxSBbPndZlQH70laD7K6xZigNqtMtPn+wjn4KRutDRKwm+GMhOEks4gggrIUDkDkenwtvbVAHYiqN7jDDoFdV2ECmuTbtmZIKVE8ed/BqRr2ZIm0WUm4qrc948YfC1TIBfTyAT75KohhHE6oqPfpGY2Ci5kpzVOpvrvsmzBJKMcgpCB1SjxCJuoWGaS241aZWo8mcbFdjZPfpjK8G8+KzCJBFk54ZxJ+DqB7bgGHM+YJGbH3jofhydJG4Y6p2gAEQ4XULjMDldmAkEQ4AXKbcG46zEsaQZBt/IVYaLO0A/XoufbTpnUhOtoW4ZiG9zM2m5tNmRrSMsKSw7KEPzU2S8nKNcoUZ2Bb8PqEZjCfhd9IRqSHv8T34KYjD0zlDWslrS0hnxymTuB0qYBaxo3LR8KlsNQy3iPE3KNiHBoJJ0QyYvJNPUfBnTaGjoobmrmRnDaRiDWqNinTGx6lMOaubaeBBa2HVXDu0wZyeJWaVsdUxT3VKrszn7uvHgm4MDlt+GHNm6ql6IVXuqPNR5JfVdmLjqSlcbT08Lz1SYfmJPoNpTusJbH5YK6a0jnOxnQ3srr7OKgbXA1hzak6ZIMf1VNoCfporHyNVy4hoOb+JNMmYgIJLRaPQ+CqBwkaFO1FcGqF1MaAg38FKgykBAXF1BQg2KK4oEoFOMwhXfAWTe03iYe4sBkUm6i9ytH45izSY6IkjK0aSSsR51xOepkFyz3o3UQUdsq9X3T4uRaDbT1P0QrGB5eso7RAj1RjBKr/AFSJP76paroEi8woWOKAmPH7JOu2D4HVdoORsWJsB6oQhTg2Odh6ggwDqNnLV+WeNteA1xg6X+NY5TIBB6aq68Eq5gCCPTZZOTBfI18eX0a9hq7T0/unraojb+yonDsZVYLGRGjrqSOPqvEC3ksSkbSfx/EWUWkkjyFy5Ufj/GqjmuynKI+ikalJzu84knxuqdzjjRSbkEy+3SFMdymkBN0myj42oatRziSZOuso9DrsEg0SnYGVu1zH8y7MVSOVJ2coCzj4hPi+fsfNNKI7p8wUtTMz5IgAtId7pNvNSfCHmjVkESx1t8yjqGo/Kb+Cc0X5Xgj4rfyoX4EjcuWuL1P9Sm5va0xUDmHOArdh64eARcELDeA8wVcK9pDnECxYTIcOiunL/NTqlRzXOoU2+83Pf0SerDdGiSgm1OqXAEGQb2uggbonU4UV7oEotWoGAucQAwSXOsGrPOZOeXVKVR2EY57KTshxLu61p8t1ooyJWIc/8yik802XcxuWflJWS4usXOkkmTqdU5xWPqVnuc9xcahJ71syjyMzgPrO6JIao0Fq3y+NyhUPnug897+UWSbyoEB6Sclo08Um4a+ahA1A6ef1SuIMwkaGo80rVEjyQhCAbr4XUnwjGPwzgSCWOMEfKo9mvmFYOE4PtGwRIc2I1hLyVWxmJO9F74RUFVjSDtqd1OUqERfZVXk9ppOdRdcN7zJtYq6RZcuUadHTi7RH46sKbSTaB9FkXMeNNes43gabLS+ZHEMdrfTwWR4p2Z7j4wN4WjiR/ZszcmVKgtK3791KsGY+DdPFIidBvqeicYcXnoI6LpGAXdYT4/VFYe6SjvEtjroTukqQ7p8vOVYIphhqfv0SrRcHof8A5SFJ0DeCUfPe1t1RaJ/hrRUIbuX72BCkn1MkEatKrGGxBabEgjQKTbxMPcxrxLWNLSGd0u9VIrYTlounAucKlAw50t+R3eDkFTsbiqQcDSbUaBThwqvFST4Wsgnfig9tCvyNGke1HjfY4Z1Npg4h3ZATBeNz/RZJg+Kuw2YQSyowjsybAndPOd+OOx+Mc+CGUXdnRovEZGDSfPX1VdqVS6fzFLWolRVbO1Hy6fmPnCK11yd+qSYb/uyPSO/5fohGHWjfrv0SLynIH2s1IVW3/dlCzrRbW2qI7f8A4RyLGPJEKhR2mP180q/9UQCAD/hKAz/ZUwkChSL3AD7K/wDAsFly2sZkj7KocGpDOSdmnaZWo8Gw4DWfm1OmyyZ5Pw2caH2IYTDFmLoxbtKbp2zbq1Op2UPhKRqYtn+1Sc619YAVmbhzqVkas1+FF53cMPQLnES8ENHVZC4lx26/yrQvajjDUqNYD3aXw9VQ8sf+11u40KjZg5MrlRwNOwubeScsIaNJg/VcaLaXKWaO6POLLUZQlQ5WN+p8Um0R5QlcRcNA8o0hELbf00lQoJRtbbXpKO46k7eiFEesHQWzLjni+tzZUWOcFBMH/hEzxUvNjtZEwr4/cKW4RiaGHxDKtal2zW3dRcYD+hVxIxCjha9YkspVniIPZtL0FZK/tGrtBFClhqDZgQM5AQTLYukUrG/xMRWyuBAqVHdo858wE7piXH6fZEqOlzuhcfFFmyWMDMdCcU/d1uXRHVNAU4ZaLeqosVw5k/yjyXCy/wB+sruHtJ8IS9VsSLjb7KFDYMsZScb+nVLnTzHnK4BooQI4GB+5QpC8aSnFNstPhaEkRB2VMJEzwWmZnoTP5lrPCKILacD4LrM+XqZewxqXZQei1qmz8PQLhdwZAi+c6fqsOb5HRw6iOOBUJdVq/O8UmnwbY/eU/wAbVDGuJsAEpg6HZU2M+RsE/MUz4w3tG5AffsY6JNjTFucavbVXPIID3Q2eirThAP0Vz55oBtUAWAtGqplUkzY7eq6GH4I52f5MUaYaIS+Gb66lNqEGxvCeYDS+oOXzCaIEqktExo+UnUcA9p2Kc42dep+qbVjIndu3RWQ6XQQfukKp7oj5kA+R/LfqiF0t8r+aogtRPdB+qNiauaDewgjWEnQs0wih23qD8qhDjnbbIJN4AMSLboKWWkIky4+ZXQ2UEFCgFt49E7cyPQAeaCChZyg9L1W2ldQUII7JQARG43+ZBBWUGpizupAdCTdB9PVBBCwkXTksBzAOlWTvm/dlpuEHbvpsB7mHiq8/ORoPrf0QQWDL8mdHH8UTxKjsY6CT8oQQSRhlnOjSapOg+syqRXsXecT8yCC6GD4mLkL9hvTkO808p2uN0EE4zCphzTMz9QE0qiB/UrqCsoZl0Hz18Unnj9EEFRY5oGWncT5IjnESNteqCChEcDYk/wCUEEEIR//Z" height="100" width="100"/>
                    {/* <img class="designer" src="Resourses/img/designer.jpg"/> */}
                    <a href="#home"><i  className="ion-chevron-up up-arrow"></i></a>
                    
                </div>
            </div>
       </div>
    )
 }
}

export default ContactmeComponent;