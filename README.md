# date Library

1) dateLib.customDate()

       returns custom formatted date and time       => refer point [1] for parameter inputs
       dateLib.customDate("dd MON YY")              returns current date.
       dateLib.customDate("dd MON yy","1991/12/12") returns provided date in provided format => "12 December 91".

2) dateLib.shortYear()

        dateLib.shortYear()                        returns current year in short form => 17
        dateLib.shortYear(2017)                    returns provided year in short form => 17
        
3) dateLib.dateTime()

        dateLib.dateTime()                         returns current date and time => "11-07-17 01:02:03"
        dateLib.dateTime("1993/12/11 12:32:19")    returns provided date and time => "11-12-93 12:32:19"
        
4) dateLib.date()

        dateLib.date()                             returns current date  => "11-07-17"
        dateLib.date("1993/12/11")                 returns provided date => "11-12-93"
        
5) dateLib.finYear()

        dateLib.finYear()                          returns current financial year  => "17-18"
        dateLib.finYear("f")                       returns current financial year in full year => "2017-2018"
        dateLib.finYear("","1993/12/11")           returns provided financial year  => "93-94"
        dateLib.finYear("f","1993/12/11")          returns provided financial year  => "1993-1994"
        
6) dateLib.finYears(previous,current,next,shortfull)

        dateLib.finYears()                          returns financial year in array => ["2016-2017", "2017-2018", "2016-2017"]
        dateLib.finYears(2,1,3,"s")                 => ["15-16", "16-17", "17-18", "18-19", "19-20","20-21"]
        
        explanation:
        =============
        [
        "15-16", => previous year 2
        "16-17", => previous year 1
        "17-18", => current year 1
        "18-19", => next year 1
        "19-20", => next year 2
        "20-21"  => next year 3
        ] 

# refer point [1]
#===============

input for dateLib.customDate("dd MON YY") => "11 August 2017"

      dd 	 => date [11]
      mm 	 => month [07]
      yy 	 => short form Year [17]
      YY 	 => full year [2017]
      MON    => full month [August]
      mon    => short month [Aug]
      rhr    => Railway hour [23]
      hr 	 => hour [11]
      min    => min [59]
      msec   => msec [33]
      sec    => sec [12]
      tm     => tm [AM/PM]
