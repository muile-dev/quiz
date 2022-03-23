## Assignment Summary

The objective is to create a responsive quiz authoring tool using the Facebook React framework, with the following features:

• Two pane design with left pane for question selection and right pane for question authoring

• Adding multiple choices (between 2 and 6) for each question

• Adding images on the question, if required

• Deleting a question

• Saving the objects to the local storage so that the data is retrieved on browser refresh

• Mobile phone support

The detailed design and wireframe are detailed below. You may be make logical assumptions where required.

## Design

The Quiz Authoring tool would have 2 panes on a desktop screen as explained below (refer wireframe on the next page):

**Left pane – question selector**

• This pane is used to add new questions to the list

• Clicking on Add should add a new question with the text “New Question 1”, “New Question 2”, etc.,

• Clicking on Delete should go into a Delete mode where any number of questions can be deleted.

**Right pane – choice creator**

• The right pane should have a sequence of text boxes (with automatically

• expanding height) to edit the question text and to add various choices

• When the text box pertaining the question text is edited, the left question

• pane for that question should automatically update

• Between 2 and 6 choices shall permitted

• Optionally, an image could be added to the question (for example, an image of a heart showing a highlighted area) by selecting from the local file system

**Responsiveness and Mobile Design**

• The screen should be responsive and should resize according to the width

• Mobile design has deliberately not been provided to evaluate the developer’s ability to handle this problem

• You may use the Bootstrap grid system to manage responsiveness (however, do not use any pre-build UI components for any other part of the application)


<img width="378" alt="Screen Shot 2022-03-23 at 11 06 08" src="https://user-images.githubusercontent.com/83914320/159621536-85812e0b-0725-48b3-b17b-ee1dd86794a9.png">



**Evaluation parameters**

You will be evaluated on the following parameters, each on a 4-point scale (Poor, Below Par, Meets Bar, Distinctive)

a) React application – this parameter will evaluate you on your ability to understand and apply key React concepts, including what component architecture you have used

b) Data structuring – this parameter will evaluate you on how sound the data architecture of your code is

c) CSS application – this parameter will evaluate on your CSS understanding and how you have applied them to this design

d) Finish and aesthetics – this parameter will evaluate you on the overall finish and aesthetics including the key question “Is the final output production-ready?”. This is different from CSS application as a good aesthetic sense can come in handy when you are developing a native application or on any another platform.

e) Code quality – this parameter will evaluate you on the organization of code, its readability and the ability of another developer to understand your code
