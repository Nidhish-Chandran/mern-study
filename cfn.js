function person(name,age,place){
    this.name=name,
    this.age=age,
    this.place=place,
    this.display=function(){
        console.log(this.name)
    }
}

var p1=new person('Nidhish',21,'Kollam')
p1.display()