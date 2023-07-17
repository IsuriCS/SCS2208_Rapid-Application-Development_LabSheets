class employee{
    employeeNum
    Name
    Address
    ContactNum 
    Nic
    JoinedDate
    designation
    salary
    lunchPreference
    LeaveDate
    NumberOfDaysWorked
    ReasonforLeave

    constructor(employeeNum,Name,Address,ContactNum,Nic,JoinedDate,designation,salary,lunchPreference){
        this.employeeNum=employeeNum
        this.Name=Name
        this.Address=Address
        this.ContactNum=ContactNum
        this.Nic=Nic
        this.JoinedDate=JoinedDate
        this.designation=designation
        this.salary=salary
        this.lunchPreference=lunchPreference
       
    }

    arrival(){
        const time=new Date()
        return `Arrives at ${time}`
    }

    leave(){
        const time=new Date()
        return `Leaves at ${time}`
    }
}

class permenent extends employee{

    constructor(employeeNum,Name,Address,ContactNum,Nic,JoinedDate,designation,salary,lunchPreference){
        super(employeeNum)
        super(Name)
        super(Address)
        super(ContactNum)
        super(Nic)
        super(JoinedDate)
        super(designation)
        super(salary)
        super(lunchPreference)
    }

}

class contract extends employee{
    duration=12

    constructor(employeeNum,Name,Address,ContactNum,Nic,JoinedDate,designation,salary,lunchPreference){
        super(employeeNum)
        super(Name)
        super(Address)
        super(ContactNum)
        super(Nic)
        super(JoinedDate)
        super(designation)
        super(salary)
        super(lunchPreference)
    }
}

class temporory extends employee{
    duration =6

    constructor(employeeNum,Name,Address,ContactNum,Nic,JoinedDate,designation,salary,lunchPreference){
        super(employeeNum)
        super(Name)
        super(Address)
        super(ContactNum)
        super(Nic)
        super(JoinedDate)
        super(designation)
        super(salary)
        super(lunchPreference)
    }
}