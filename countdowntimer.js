var startTimer = null;

function calcTime(){
    // clearInterval(startTimer)
    var eventname = document.querySelector('input#eventname').value 
    var date_to = document.querySelector('input#date_to').value
    // window.alert(date_to)
    var qtd_events = document.getElementsByClassName('showeventname').length
    // window.alert(qtd_events)
    
    if (eventname==''){
        window.alert('Please, give your event a name!')
    }
    else{
        if (date_to=='')
            window.alert('Please, choose a date for your event!')
        else{
            var current_date_time = new Date()
            current_date_time = String(current_date_time.toLocaleString())
            var current_month = leftPad(current_date_time.split('/')[0],2)
            var current_day = leftPad(current_date_time.split('/')[1],2)
            var current_year = current_date_time.split('/')[2]
            var current_year = current_year.split(',')[0]
            var event_year = date_to.split('-')[0]
            var event_month = date_to.split('-')[1]
            var event_day = date_to.split('-')[2]

            var event_time = document.querySelector('input#time_to').value
            if (event_time ==''){
                var event_hour = '00'
                var event_minute = '00'
            }
            else {
                var event_hour = event_time.split(':')[0]
                var event_minute = event_time.split(':')[1]
            }
            var event_second = '00'
            
            current_date_time = current_date_time.split(',')[1]
            current_date_time = current_date_time.split(':')

            var current_hour = Number(current_date_time[0])
            current_hour = leftPad(current_hour,2)

            var current_minute = Number(current_date_time[1])
            current_minute = leftPad(current_minute,2)

            var current_second = current_date_time[2].split(' ')
            
            if (current_second[1]=='PM'){
                current_hour = Number(current_hour)+12
            }
            current_second = Number(current_second[0])
            
            current_second = leftPad(current_second,2)
            var event_date = `${event_year}${event_month}${event_day}`
            var current_date = `${current_year}${current_month}${current_day}`

            // var current_date = new Date().getTime();
            // var event_date = new Date(date_to).getTime();

            var event_time = `${event_hour}${event_minute}${event_second}`
            var current_time = `${current_hour}${current_minute}${current_second}`

            if ((event_date)>(current_date)){
                createDisplay(qtd_events)
                // while (remaning_time!=0){
                date = new Date(date_to).getTime();
                // startTimer = window.setInterval(startCountdown, 1000, event_date, current_date, event_time, current_time) 
                
                // var eventname = document.querySelector('input#eventname').value 
                for (var i=0; i<=qtd_events; i++){
                    startTimer = window.setInterval(startCountdown, 1000, date, eventname, qtd_events)
                }
                
                // }
                // startCountdown = startCountdown(event_date, current_date, event_time, current_time)
            }

            else if((event_date)==(current_date)){
                if (event_time=='000000'){
                    window.alert('Please, choose a time for your event!')
                }   
                else if((event_time)>(current_time)) {
                    createDisplay(qtd_events)
                    date = new Date(date_to).getTime();
                    var baias = (Number(event_hour)*60*60+Number(event_minute*60)+Number(event_second))*1000
                    
                    // var eventname = document.querySelector('input#eventname').value 
                    for (var i=0; i<=qtd_events; i++){
                        startTimer = window.setInterval(startCountdown, 1000, date, eventname, qtd_events)
                    }

                } 
                else{
                    window.alert('Please, choose a future time for your event!')
                }
            }
            else {
                window.alert('Please, choose a future date for your event!')
            }

        }
    }
}

function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function startCountdown(date, eventname, qtd_events){
    var display = document.querySelector('div.countdown')
    // var year_dif = event_date.substring(0,4)-current_date.substring(0,4)
    // var month_dif = event_date.substring(5,6)-current_date.substring(5,6)
    // var day_dif = event_date.substring(7,8)-current_date.substring(7,8)
    // window.alert(year_dif)
    // window.alert(month_dif)
    // window.alert(day_dif)
    var now = new Date().getTime()-(3*60*60*1000);
    var distance = date - now;
    // window.alert(date)
    // window.alert(now)
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    var showeventname = document.querySelector(`p#showeventname${qtd_events}`)
    var showeventday = document.querySelector(`p.showeventday${qtd_events}`)
    var showeventhour = document.querySelector(`p.showeventhour${qtd_events}`)
    var showeventminute = document.querySelector(`p.showeventminute${qtd_events}`)
    var showeventsecond = document.querySelector(`p.showeventsecond${qtd_events}`)
    // showeventname.innerText
    // window.alert(showeventname)
    // window.alert(showeventday)
    showeventname.innerText = eventname
    showeventday.innerText = days
    showeventhour.innerText = hours
    showeventminute.innerText = minutes
    showeventsecond.innerText = seconds
    
    // display.innerHTML = 
        // `<div class='countdown'>
        //     <p id='showeventname'></p>
        //     <div>
            
        //         <p id='showeventday'></p>
        //         <p id='day'>
        //             DAYS
        //         </p>
        //     </div>
        //     <div>
        //         <p id='showeventhour'></p>
        //         <p id='hour'>
        //             HOURS
        //         </p>
        //     </div>
        //     <div>
        //         <p id='showeventminute'></p>
        //         <p id='minute'>
        //             MINUTES
        //         </p>
        //     </div>
        //     <div>
        //         <p id='showeventsecond'></p>
        //         <p id='second'>
        //             SECONDS
        //         </p>
        //     </div>
        // </div>`

    // display.innerHTML = 


    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0){
        // window.alert('talk to me nice')
        clearInterval(startTimer);
        showeventname.innerText = eventname
        showeventday.innerText = 'D'
        showeventhour.innerText = 'O'
        showeventminute.innerText = 'N'
        showeventsecond.innerText = 'E'
    }
    
}

function createDisplay(qtd_events){
    
    var display = document.querySelector('div.countdown')
    display.innerHTML += 
    `<div>
        <span class = 'test'> 
            <p class='showeventname' id='showeventname${qtd_events}'></p>
        </span>
    
        <p id='showeventday' class='showeventday${qtd_events}'></p>
        <p id='day'>
            DAYS
        </p>
    </div>
    <div>
        <p id='showeventhour' class='showeventhour${qtd_events}'></p>
        <p id='hour'>
            HOURS
        </p>
    </div>
    <div>
        <p id='showeventminute' class='showeventminute${qtd_events}'></p>
        <p id='minute'>
            MINUTES
        </p>
    </div>
    <div>
        <p id='showeventsecond' class='showeventsecond${qtd_events}'></p>
        <p id='second'>
            SECONDS
        </p>
    </div>`
}