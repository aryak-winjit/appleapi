SET Node_App_Name='appleapi'

FOR /F "tokens=* USEBACKQ" %%F IN (`pm2 id %Node_App_Name%`) DO SET PM_STATE=%%F

IF "%PM2_STATE%" == "[]" (
	pm2 start npm --name %Node_App_Name% -- start
) 