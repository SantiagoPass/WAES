# WAES Assignment for Testers

<h2>Content</h2>
<ul>
<li>Instruction to execution</li>
<ul>
  <li>Software prerequisites</li>
  <li>Initial setup</li>
  <li>Test Suite execution</li>
  </ul>
<li>How to visualize Reports</li>
  <ul>
  <li>Cucumber Report</li>
  <ul>
  <li>Features Statistics</li>
  <li>Feature Report</li>
  <li>Steps Statistics</li>
  <li>Failures Overview</li>
  </ul>
 <li>Log Reports</li>
 <li>Demo execution</li>
 </ul>
<li>Suggestions for improvements</li>

</ul>


<h2>Instruction to execute:</h2>
<h3>Software prerequisites</h3>

*	Install and configure JDK 1.8+
*	Install and configure [Apache Maven 3.5.2+](http://maven.apache.org/)



<h3>Initial setup</h3>

1.	Download the code from the repository
2.	Go to the CMD Console and enter to the folder where the code was downloaded.
3.	Enter to the folder where is the file pom.xml
4.	Execute the following command: 

	  ```
    mvn clean install –DskipTests 
    ```
5.	If <b>BUILD SUCCESS</b> result is obtained the Test cases can be executed

    ![success_installation](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/success_installation.png)
	
<h3>Test Suite execution</h3>

1.	Previous to execute the suite, you are able to configure in which browser you want to run the Test cases.
   	
    Open with a text editor the file: <b>\WAES\src\main\resources\_config.properties</b>
    
  	Change value for the browser property: (chrome, firefox and IE are the available values)

    ![config_properties](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/config_properties.png)
 

2.	Go to the CMD Console and enter to the folder where the code was installed according to the Initial Setup section.
3.	Go to the <b>WAES\Tools\Selenium</b> folder
4.	Execute the following command:

    ```
     startServer.sh
    ```
    A new window will be opened with the selenium Server up and running
    
    ![server_up](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/server_up.png)

5.	Open a <b>new CMD Command window</b>, go to the project folder and execute:
    
    ```
    mvn clean install test -Dsuite=all-web-features
    ```
6.	The Test cases execution will start:
 
    ![start_test_execution](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/start_test_execution.png)

<h2>How to visualize Reports</h2>
After the execution, all reports will be available on <b>\WAES\reports\qa\emailable-report.html</b>
Open the report from a new File Explorer Window
<h3>General Report:</h3>

![general_report](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/general_report.png)
 
<h3>Cucumber Report</h3>
If you want to see Cucumber Report click on the link: <b>Open Cucumber Report in new Window</b> (see image above). 
The followings reports will be available:

<h4>Features Statistics:</h4>
 
 ![feature_statistics](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/features_statistics.png)
 
<h4>Feature Report:</h4>

  ![feature_report](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/features_report.png)

<h4>Steps Statistics:</h4>

  ![steps_statistics](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/steps_statistics.png)
 
<h4>Failures Overview:</h4>
 
  ![failures_overview](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/failures_overview.png)

<h3>Log Reports</h3>
From the <b>General Report</b>, click on <b>Log</b> link next to the feature name to see the logs:
 
  ![logs](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/logs_report.png)
 
<h3>Demo execution</h3>
From the <b>General Report</b>, click on <b>Demo</b> link next to the feature name to see the Images execution:

  ![demo](https://github.com/SantiagoPass/WAES/blob/master/readmeImg/demo_images.png)

<h3>Suggestions for improvements:</h3>
<ul>
<li>Toggle for on/off headless execution of the tests in the _config.properties file.</li>
<li>Configure Zafira to increase the transparency of test automation results and provide better understanding of product quality.</li>
</ul>

