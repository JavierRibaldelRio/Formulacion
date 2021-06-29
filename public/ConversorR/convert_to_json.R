
# librerias ---------------------------------------------------------------

library(openxlsx)
library(jsonlite)

# Variables

nombreExcel<-readline(prompt="Inserte el nombre de la excel: " )

nombreExcelSinExtension = ""




if(TRUE == endsWith(nombreExcel,'.xlsx')){
  
  nombreExcelSinExtension<- substr(nombreExcel,1,nchar(nombreExcel)-5)
  
}else{
  
  nombreExcelSinExtension <- nombreExcel
  
  nombreExcel<- paste0(nombreExcel,".xlsx",sep="")
  
  
}

nombreJson<- paste0(nombreExcelSinExtension,".json")

  



# importar ----------------------------------------------------------------

d <- openxlsx::read.xlsx(nombreExcel)





# convertir a json --------------------------------------------------------

j <- toJSON(x = d, method = 'C', )




# escribir a archivo json -------------------------------------------------

write(x = j, file =nombreJson )

print("Se ha ejecutado correctamente")

