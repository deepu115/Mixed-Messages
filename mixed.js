function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const weatherSupport = {
    type: ['sunny','cloudy','rainy','snowy','stormy','Windy','foggy','lightining','thunder'],
    effect: ['bright and hot','sad and lazy','wet and dirty','freezing beautiful','odd and messy','scary and sound','flying high','blind day','Thor in skies'],
    advice: ['Use Sunscreen and get out','Listen music','Eat Hot food','Lit fire','Stay Inside','Stay away from heights','Wear jacket','Be careful on road','Dont Watch sky']
  }
  
  // Store the 'wisdom' in an array
  let message = []
  
  // Iterate over the object
  for(let i in weatherSupport) {
    let randomString = generateRandomNumber(weatherSupport[i].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(i) {
      case 'type':
        message.push(`Currently it is ${weatherSupport[i][randomString]}.`)
        break
      case 'effect':
        message.push(`It seems to be ${weatherSupport[i][randomString]}.`)
        break
      case 'advice':
        message.push(`I would suggest ${weatherSupport[i][randomString]}.`)
        break
      default:
        message.push('There is not enough info.')
    }
  }
  
  function Mix(string) {
    const formatted = message.join('\n')
    console.log(formatted)
  }
  
  Mix(message);