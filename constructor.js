function Rope (options){
	options = options || {}
	this.lengthOfPiece= options.lengthOfPiece || 0
	this.amountOfRope= options.amountOfRope || 1000
	this.ageInYears= options.ageInYears || 0
	
  	
   var that=this
	this.validateLength = function () {
		if (that.lengthOfPiece > that.amountOfRope) {
			console.log("Invalid length")
			return false;
		}
		else {
			return true;
		}

	}

	this.cutRope = function () {
		if (that.validateLength() === false) {
			console.log("Error cannot cut more Rope than we have")
		}

		else {
			that.amountOfRope= that.amountOfRope - that.lengthOfPiece;
			that.lengthOfPiece=0;
		}

   }

   this.safeToUse = function () {
   		if (that.ageInYears > 5){
   			console.log("Unsafe should be discarded and replaced")
   			return false
   		}

   		else if (that.ageInYears > 2) {
   			console.log("Carefully examine for signs of fray and wear")
   			return true
   		}

   		else {
   			console.log("Should be safe")
   			return true
   		}

   }

   this.teachKnotTying = function () {
   		if(that.amountOfRope < 10) {
   			console.log("Not enough rope for teaching")

   		}

   		else {
   			that.amountOfRope -= 10
   			console.log("You now have knot tying ropes ready for teaching")
   		}
   }


   this.needToBuy = function () {
   		if(that.safeToUse === false) {
   			console.log("We need new rope")
   			return true

   		}
   		else if (that.amountOfRope < 200) {
   			console.log("We need more rope")
   			return true

   		}	

   		else {
   			console.log("We are good on rope for now")
   			return false
   		}	
   }
}





function Spars (option2){
	option2 = option2 || {}
	this.woodType = option2.woodType || "pine"
	this.locationYield = option2.locationYield || 30
	this.woodQuality = option2.woodQuality || "safe"
	this.quantity = option2.quantity || 15

	var y = this

	this.useableSpar = function () {
		if (y.woodQuality === "rotten") {
			console.log ("Spar is not useable")
			return false
		}
		else {
			console.log("Inspect for other damage but should be good")
			return true
		}

	}

	this.ableToCutMore = function () {
		if (y.locationYield < 20) {
			console.log("Forest is to thin to cut without causing more damage")
			return false
		}

		else {
			console.log("There are some to harvest")
			return true
		}
	}

	this.cutMoreSpars = function () {
		if (y.ableToCutMore === false) {
			console.log("Cannot Cut more here in danger of ruining forrest")
		}

		else if (y.locationYield > 40) {
			y.locationYield= y.locationYield/2
			y.quantity= y.quantity+y.locationYield
		}

		else {
			y.quantity= y.quantity + y.locationYield - 20
			y.locationYield=20
		}

	}

	this.buildTripod = function () {
		if (y.quantity < 3) {
			console.log("Cannot build a tripod not enough spars")	
		}
		else {
			console.log("You built a tripod")
			y.quantity = y.quantity - 3
		}
	}

	this.buildTower = function () {
		if(y.quantity < 16) {
			console.log("Cannot build a tower not enough spars")
		}

		else {
			y.quantity = y.quantity - 16
			console.log ("You build a simple tower")
		}
	}

}


function Staffing (option3){
	option3 = option3 || {}
	this.yearsOfExperience = option3.yearsOfExperienc || 1
	this.skillLevel = option3.skillLevel || 1
	this.age = option3.age || 17
	this.firstName = option3.firstName || "Johnny"

	var z=this
	this.shouldHire = function () {
		if ((z.yearsOfExperience + z.skillLevel) > 3) {
			console.log("Good for consideration")
			return true;
		}

		else if ((z.yearsOfExperience + z.skillLevel) < 3) {
			console.log("Do not hire")
			return false;

		}
	}

	this.placementRecommendation = function () {
		if (z.skillLevel > 6) {
			console.log("Should be a pioneering instructor")
			return true;
		}

		else if (z.skillLevel > 2) {
			console.log("Should teach basic knots and lashings")
			return true;
		}

		else {
			console.log("Staffer needs extra tutoring")
			return false;
		}

	}

	this.teachTotemChit = function () {
		if(z.placementRecommendation() === false) {
			console.log("Instructor is not yet ready")
			return false
		}
		else {
			z.skillLevel++
			console.log("New Scouts learned Totem Chit")
			return true
			
		}
	}

	this.chopTree = function () {
		if(z.placementRecommendation() === false) {
			console.log("Instructor may only use an axe under supervision")
			z.skillLevel++
		}
		else if (z.age > 21) {
			console.log("Instructor may use a chain saw")
			z.skillLevel++
		}

		else {
			console.log("Instructor may only use an axe because of age")
			z.skillLevel++
		}
	}

	this.completeYear = function () {
		z.skillLevel++
		z.age++
		z.yearsOfExperience++
	}


}

function Agent (option4) {
	option4 = option4 || {}
	this.agencyYears = option4.agencyYears || 1
	this.combatSkill = option4.combatSkill || 1
	this.agency = option4.agency || "NIS"
	this.rank
	this.weaponDamage
	this.hp
	this.life = "alive"

	r=this
	this.rankPlacement = function() {
		if(r.agencyYears < 2) {
			r.rank = "Probationary Agent"
		}
		else if (r.agencyYears < 5) {
			r.rank= "Agent"
		}

		else if (r.agencyYears < 10) {
			r.rank = "Special Agent"
		}

		else {
			r.rank = "Team Leader"
		}
	}

	this.determineWeaponDamage = function () {
		if (r.rank === "Probationary Agent") {
			r.weaponDamage=2
		}
		else if(r.rank === "Agent") {
			r.weaponDamage=4
		}
		else if(r.rank === "Special Agent") {
			r.weaponDamage=6
		}
		else if(r.rank === "Team Leader") {
			r.weaponDamage=10
		}
		else {
			r.rank="Civilian"
			r.weaponDamage=1
		}
	}

	this.setHP = function () {
		
		var bonusHP = 0
		if(r.rank === "Probationary Agent") {
			bonusHP=10
		}
		else if(r.rank === "Agent") {
			bonusHP = 20
		}

		else if (r.rank === "Special Agent") {
			bonusHP = 25
		}
			
		else if (r.rank === "Team Leader") {
			bonusHP = 35
		}
		r.hp = (r.agencyYears * 10) + (r.combatSkill * 20) + bonusHP
	}

	this.attack = function (target) {

		target.hp = target.hp - this.weaponDamage
		
	}

	this.checkLife = function () {
		if(r.hp<1) {
			r.life= "dead"
		}

		else if(r.hp<20) {
			r.life="wounded"
		}
	}


}

