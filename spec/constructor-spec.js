describe("Constructor Practice", function () {
	
	describe("should create a Constructor called Rope that", function() {
		sisal= new Rope 

		describe("has defaults of", function (){
			it("the working section length of rope to be 0", function (){
				expect(sisal.lengthOfPiece).toEqual(0)
			})
			it("the amount of rope available is 1000", function (){
				expect(sisal.amountOfRope).toEqual(1000)
			})
			it("the age of rope to be new so set to 0", function (){
				expect(sisal.ageInYears).toEqual(0)
			})
		})

		describe("allows for values to be overridden as needed such as", function(){
			it("setting the length of the working section to 100",function(){
				sisal.lengthOfPiece=100
				expect(sisal.lengthOfPiece).toEqual(100)
			})
			it("setting the age of the rope to two years", function(){
				sisal.ageInYears=2
				expect(sisal.ageInYears).toEqual(2)
			})
		})
		
		it("has a function that checks to make sure it is possible to gather the desired length of rope and warns the user if the length is longer than the amount available", function(){
			sisal.lengthOfPiece=1200
			expect(sisal.validateLength()).toBe(false)
		})
		it("has a function that checks if the rope is safe to use if it is older than five years", function(){
			sisal.ageInYears= 6
			expect(sisal.safeToUse()).toBe(false)
		})
		it("has a function that cuts a section of rope out of the total amount", function() {
			sisal.lengthOfPiece = 200
			sisal.cutRope()
			expect(sisal.amountOfRope).toEqual(800)
		})
		it("has a function that cuts some rope for knot tying when you wish to teach knot tying", function (){
			var ropeAmount=sisal.amountOfRope
			sisal.teachKnotTying ()
			expect(sisal.amountOfRope).toEqual(ropeAmount - 10)
		})

		it("evaluates the need to buy more rope when it is time", function(){
			sisal.amountOfRope= 100
			expect(sisal.needToBuy()).toBe(true)
		})
	})

	describe("should create a Constructor called Spars that", function(){
		Spar1 = new Spars
		
		describe("has defaults of", function(){
			it("a wood type of pine",function(){
				expect(Spar1.woodType).toBe("pine")
			})
			it("a yield of 30 from the location it originally came from", function(){
				expect(Spar1.locationYield).toEqual(30)
			})
			it("a wood quality of safe", function(){
				expect(Spar1.woodQuality).toBe("safe")
			})
			it("a quantity of these spars to be 15", function(){
				expect(Spar1.quantity).toEqual(15)
			})
		})
		describe("allows for values to be overridden as needed such as", function(){
			it("setting the yield of the location to 100",function(){
				Spar1.locationYield=100
				expect(Spar1.locationYield).toEqual(100)
			})
			it("setting the wood type to oak", function(){
				Spar1.woodType = "oak"
				expect(Spar1.woodType).toBe("oak")
			})
		})	
		it("should check to see if the spars are rotten or and useable", function(){
			Spar1.woodQuality="rotten"
			expect(Spar1.useableSpar()).toBe(false)
		})

		it("should check if there are enough trees to cut more spars", function(){
			Spar1.locationYield=50
			expect(Spar1.ableToCutMore() ).toBe(true)
		})

		it("should reduce the number of available spars when called to cut spars", function(){
			Spar1.cutMoreSpars()
			expect(Spar1.locationYield).toEqual(25)
		})
		it("should reduce the number of spars in inventory by 16 when building a tower", function(){
			var sparQuantity = Spar1.quantity
			Spar1.buildTower()
			expect(Spar1.quantity).toEqual(sparQuantity-16)
		})
		it("should reduce the number of spars in inventory by 3 when building a tripod", function(){
			var sparTotal = Spar1.quantity
			Spar1.buildTripod()
			expect(Spar1.quantity).toEqual(sparTotal-3)
		})
	})

	describe("should create a Constructor called Staffing that", function (){
		newGuy = new Staffing

		describe("has defaults of", function(){
			it("1 year of prior experience", function(){
				expect(newGuy.yearsOfExperience).toEqual(1)
			})
			it("an age of 17", function(){
				expect(newGuy.age).toEqual(17)
			})
			it("a set skill level of 1", function(){
				expect(newGuy.skillLevel).toEqual(1)
			})
			it("a first name of Johnny", function(){
				expect(newGuy.firstName).toBe("Johnny")
			})
		})

		describe("allows values to be overridden such as", function(){
			it("setting the age of the staff member to 20", function(){
				newGuy.age=20
				expect(newGuy.age).toEqual(20)
			})
			it("setting the first name of the staff member to Timmy", function(){
				newGuy.firstName = "Timmy"
				expect(newGuy.firstName).toBe("Timmy")
			})
		})
		it("checks to see if the staff member should be hired in the first place by checking their experience and skill level.  If the value is low it should return false to hire", function(){
			newGuy.skillLevel=0
			newGuy.yearsofExperience=1
			expect(newGuy.shouldHire()).toBe(false)
		})

		it("tests each staffers capability of teaching a skill", function(){
			newGuy.yearsofExperience=0
			newGuy.skillLevel=2
			expect(newGuy.placementRecommendation()).toBe(false)
		})

		it("adds to the staff members skill when they complete an action of chopping a tree", function(){
			newGuy.skillLevel=2
			newGuy.chopTree()
			expect(newGuy.skillLevel).toEqual(3)
		})

		it("adds to the staff members skill when they complete and instruction of Totem Chit", function(){
			newGuy.skillLevel=4
			newGuy.teachTotemChit();
			expect(newGuy.skillLevel).toEqual(5)
		})
		
		describe("after a completing a year on staff", function(){
			beforeEach(function(){
				newGuy.skillLevel=8
				newGuy.age=18
				newGuy.yearsOfExperience=0
				newGuy.completeYear()
			})
			it("adds a year of experience after the staff member", function(){
				expect(newGuy.yearsOfExperience).toEqual(1)
			})
			it("adds to the skill level of the staff member", function(){
				expect(newGuy.skillLevel).toEqual(9)
			})
			it("adds to the staff member's age", function(){
				expect(newGuy.age).toEqual(19)
			})
		})
	})




})