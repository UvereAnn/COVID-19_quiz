import React, {useState} from 'react'
import QuestionsList from './components/QuestionsList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleCorrectAnswer = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1)
    }
    setClicked(true)
  }

  const handlePrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1)
  }

  const handleNextQuestion = () => {
    setClicked(false);
    if(currentQuestion < QuestionsList.length - 1){
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowScore(true)
    }
  }


  return (
    <div className="app-wrapper">
       {showScore ? (
        <div>
          <div className="completed">Completed!</div>
          <div className="score-section">
            You Scored: {score}/{QuestionsList.length}
            
          </div>
          <div className='completed-questions'>
            <p>All questions and answers were gotten from: 
              <a 
                href="https://www.hopkinsmedicine.org/" 
                target="_blank"
              >
                Johns Hopskins Medicine website
              </a> 
                and 
                <a 
                  href='https://www.avert.org/take-our-covid-19-quiz'
                  target="_blank"
                >
                  Avert Website
                </a>
            </p>
            
            <h5> No.1) What does the “19” in “COVID-19” refer to?</h5>
            <p className='corr'>The correct answer is D: The coronavirus and the disease it causes were identified in 2019.</p> 
            <p>A new coronavirus, technically named SARS-CoV-2, and the disease it causes were first identified in 2019.
            </p>

          <h5> No.2) True or false: There is more than one coronavirus.</h5>
          <p className='corr'>The correct answer is A: True.  </p> 
          <p>There are hundreds of coronaviruses, and some of them cause disease in humans, such as mild colds and more serious illnesses or death. The SARS-CoV-2 coronavirus, 
              along with those that cause SARS and MERS are examples of coronaviruses that can cause serious illness in people.
          </p>

          <h5> No.3) The “corona” in coronavirus means:</h5>
            <p className='corr'>The correct answer is D: Crown. </p> 
            <p>Spike proteins on these viruses’ 
                outer coating give them the appearance of a crown or halo.
            </p>

          <h5> No.4) An effective hand sanitizer contains at least this percentage of alcohol to kill the coronavirus and other germs.</h5>
          <p className='corr'>The correct answer is C: 60%. </p>
          <p>60% Lower alcohol content may make a hand sanitizer less effective in killing the coronavirus and other pathogens.
          </p>

          <h5> No.5) True or false: Once you are fully vaccinated you may not be required to wear a mask in public places. </h5>
            <p className='corr'>The correct answer is A: True. </p>
            <p>   The CDC has updated its recommendations on resuming some activities once you have completed your COVID-19 vaccines and allowed at least two weeks for your immune system to respond after your last shot. Fully vaccinated people can resume activities without wearing a mask or physically distancing, except where required by federal, state, local, tribal, or territorial laws, rules, and regulations, including local business and workplace guidance. The CDC continues to recommend that masks and physical distancing are required when going to the doctor’s office, 
                  hospitals or long-term care facilities, including all Johns Hopkins hospitals, care centers and offices.
            </p>

          <h5> No.6) When is it safe to be closer than 6 feet to another person who is not sick with COVID-19? </h5>
          <p className='corr'>The correct answer is C. When the person normally lives with you. </p>
          <p> When the person normally lives with you in your home. When you’re around anyone from outside your regular household, physical distancing and mask-wearing are essential to avoid spreading the coronavirus. 
              Outdoors is generally safer than inside, but you should still maintain physical distance and wear your face mask.
          </p>

          <h5>No.7) Which of these is not a common COVID-19 symptom? </h5>
            <p className='corr'>The correct answer is A. Blurred vision.</p>
            <p>The others are common things experienced by people who have COVID-19. 
            </p>

          <h5>No.8) Staying apart from other people when you have been exposed to the coronavirus is called:</h5>
          <p className='corr'>The correct answer is C. Quarantine.</p>
          <p>A person who has been exposed to an infectious illness might be under quarantine to wait and see if they will become sick. Physical distancing refers to staying at least 6 feet apart from someone to avoid spreading disease. 
              Isolation is keeping someone sick with COVID-19 apart from other patients in a health care setting.
          </p>

          <h5>No.9) What is the safest way to celebrate your birthday during the COVID-19 pandemic? </h5>
            <p className='corr'> The correct answer is B. Having a virtual party using an online conferencing app.</p>
            <p>Having a virtual party is the safest option. Gathering in person, especially indoors, with people that you don’t normally live with — even if they’re relatives or good friends — is risky. Situations where masks aren’t 
                being worn or are being removed to eat or drink are especially likely to spread the coronavirus and cause illness.
            </p>

          <h5>No.10) True or false: Having a food allergy means you should not get a COVID-19 vaccine. </h5>
          <p className='corr'> The correct answer is B. False.</p>
          <p>
              False. People with food allergies can be vaccinated for the coronavirus. 
              However, those who are seriously allergic to any of the ingredients in the vaccine itself should not get the vaccine.
          </p>

            <h5> No.11) How is COVID-19 passed on?</h5>
            <p className='corr'>The correct answer is A: Through droplets that come from your mouth and nose when you cough or breathe out"</p> 
            <p>
              When a person with COVID-19 coughs, breathes out or sneezes, droplets come out from their nose and mouth which can contain the virus. These can be breathed in by people who are nearby or land on surfaces which other people can then touch. 
              Regularly washing your hands and keeping your distance from others is the best way to prevent COVID-19. 
            </p>

          <h5> No.12) What are the common symptoms of COVID-19? </h5>
          <p className='corr'>The correct answer is D: All of the above.  </p> 
          <p>COVID-19 is usually marked by a new and continuous cough, but some people get other symptoms too including tiredness, a fever and flu-like symptoms including headaches, runny nose and a sore throat. 
            If you’re finding it hard to breathe or your symptoms don’t improve after 7 days, call your local health service straight away.           
          </p>

          <h5> No.13) Can you always tell if someone has COVID-19?</h5>
            <p className='corr'>The correct answer is A: No – not everyone with COVID-19 has symptoms </p> 
            <p>The virus can be in someone’s body for up to 14 days before they get symptoms, and some people will have such a mild case of COVID-19 that they might not notice anything is wrong. 
              That’s why it’s important that everyone follows their government’s advice even if they feel healthy.
            </p>

          <h5> No.14) Can washing your hands protect you from COVID-19? </h5>
          <p className='corr'>The correct answer is B: Yes – but only if you use a strong bleach </p>
          <p>Washing your hands regularly is one of the best way to avoid getting or passing on COVID-19. It’s important to keep washing your hands throughout the day especially before and after going out. To wash your hands properly you need to get every spot. Make sure you wash them for at 
            least 40 seconds if you are using soap and water, and for at least 20 seconds if you’re using hand sanitizer. 
          </p>

          <h5> No.15) Which of the following people is COVID-19 more dangerous for? </h5>
            <p className='corr'>The correct answer is D: All of the above </p>
            <p> Most people’s immune systems will be able to fight the virus and so COVID-19 won't make them seriously ill, 
              however it can be more dangerous for older people and people with existing health problems - including lung problems, heart problems, diabetes and others. People with a reduced immune system can also be more at risk, 
              this includes people having chemotherapy for cancer or those with untreated HIV.
              COVID-19 is normally not very serious in children and doesn’t affect people differently depending on 
              where they live in the world or their race. 
            </p>

          <h5> No.16) Are people living with HIV always more at risk?  </h5>
          <p className='corr'>The correct answer is A. Yes – people with HIV have weaker immune systems </p>
          <p> There’s no evidence that people living with HIV who are adhering to effective antiretroviral treatment (ART), have high CD4 counts and are otherwise well, are more likely to get COVID-19. 
            There’s also no evidence that these people are more likely to become seriously ill if they do get the COVID-19.
            The people who need to be more careful are those with a low CD4 count (less than 200 copies/cell), a high viral load, or those who have had a recent opportunistic infection. 
            If this applies to you speak to your health care worker for more advice.
          </p>

          <h5>No.17) When should fabric face masks be worn? </h5>
            <p className='corr'>The correct answer is D. All of the above</p>
            <p>The World Health Organisation now recommends using face masks when you are not able to stay at least 1 meter away from others. This
              includes when you’re on public transport, inside shops, or any other time when you’re in a confined or crowded space.
              This is because we now have evidence that some people who get COVID-19 don’t get any symptoms but can still pass the virus on. 
              Wearing fabric masks prevent these asymptomatic and seemingly healthy people from passing on the virus in public spaces. 
              If you do have symptoms for COVID-19, you still need to stay home and self-isolate - wearing a mask is not enough.
            </p>

          <h5>No.18) Can COVID-19 be cured? </h5>
          <p className='corr'>The correct answer is C. No – but most people get better by themselves</p>
          <p>Most people who get COVID-19 will recover by themselves, normally within 14 days. Some people who get more seriously ill with COVID-19 may need hospital care to help them breathe. 
            For a small percentage of people COVID-19 can be fatal. If your symptoms don’t get better after 7 days, you are finding it hard to cope, 
            or if at any point you have difficulty breathing you should call your local health service straight away.
          </p>

          <h5>No.19) Which of the following is an example of physical distancing?  </h5>
            <p className='corr'> The correct answer is A. You stop going to crowded places and visiting other people’s houses</p>
            <p> To slow down the spread of COVID-19 people are being asked to reduce the amount of time that they spend with 
              other people and the number of people they meet in a day. The exact advice on how to do this will vary depending on where in the world you live. 
              In some places, people have been asked to stop shaking hands and avoid large gatherings. Other places are telling people to stay at home 
              completely and only leave the house to exercise, shop for essentials and go to work (if you can’t work at home).
              You can still keep in contact with friends and family over the phone or by other means. This is a way to maintain good wellbeing and mental health.
            </p>

          <h5>No.20) How can people living with HIV protect themselves from COVID-19? </h5>
          <p className='corr'> The correct answer is D. All of the above.</p>
          <p>
              People living with HIV should follow the general advice for example washing their hands regularly. 
              It’s also important to keep taking antiretroviral treatment as prescribed. 
              Exercising, eating healthily and getting good sleep are ways to boost your immune system so that you stay healthy.
              COVID-19 can also make lots of people feel anxious, so it’s important to look after your mental health too. 
              Keep in touch with your friends and family online or over the phone, do things that you enjoy and talk how you are feeling. 
              We all need to support each other during this time. 
          </p>

          </div>
        </div>
      ) : (

        <div>
          <div className="question-section-wrapper">
            <h1 id="test">Test your knowledge: COVID 19</h1>
            <div className="question-count" >
              Question {currentQuestion + 1} of {QuestionsList.length}
            </div>
            <div className="question" >
              {QuestionsList[currentQuestion].question}
            </div>
          </div>

          <div className="answer-section-wrapper" >
            {QuestionsList[currentQuestion].answersList.map((answerOption) => (
              <li className="answer-list" key={uuidv4()}>
                <button 
                  disabled={clicked}
                  className={`answer-button ${clicked && answerOption.isCorrect ? "correct" : ""
                  }`} 
                  onClick={() => handleCorrectAnswer(answerOption.isCorrect)}
                >
                {answerOption.answer}
                </button>
              </li>
            ))}
          </div>

          <div>
            <button 
              className="prev-button"
              onClick={handlePrevQuestion} disabled={!clicked}
            >Previous
            </button>
          
            <button 
              className="next-button"
              onClick={handleNextQuestion} disabled={!clicked}
            >next
            </button>
          </div> 
        </div>
      )}
    </div>
  )
}

export default App;