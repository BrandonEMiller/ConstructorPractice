describe("Constructor Practice", function () {
	
	describe("should create a Constructor called Rope that", function() {
		sisal= new Rope 
		it("has a defined length of a section", function() {
			
			expect(sisal.lengthOfPiece).toEqual(0)

		})

		it("has a function that cuts a section of rope out of the total amount", function() {
			sisal.lengthOfPiece = 200
			sisal.cutRope()
			expect(sisal.amountOfRope).toEqual(800)
		})

		it("evaluates the need to buy more rope when it is time", function(){
			sisal.amountOfRope= 100
			expect(sisal.needToBuy()).toBe(true)
		})
	})

	describe("should create a Constructor called Spars that", function(){
		Spar1 = new Spars
		it("should have a defined wood type", function(){
			Spar1.woodType="oak"
			expect(Spar1.woodType).toBe("oak")
		})

		it("should check to see if the spar is rotten or and useable", function(){
			Spar1.woodQuality="rotten"
			expect(Spar1.useableSpar()).toBe(false)
		})

		it("should check if there is a capability to cut more spars", function(){
			Spar1.locationYield=50
			expect(Spar1.ableToCutMore() ).toBe(true)
		})

		it("should reduce the number of available spars when called to cut spars", function(){
			Spar1.cutMoreSpars()
			expect(Spar1.locationYield).toEqual(25)
		})
		it("should reduce the number of spars in inventory by 16 when building a tower", function(){
			Spar1.buildTower()
			expect(Spar1.quantity).toEqual(24)
		})
	})

	describe("should create a Constructor called Staffing that", function (){
		newGuy = new Staffing
		it("has a defined age assigned to the staff member", function(){
			newGuy.age = 22
			expect(newGuy.age).toEqual(22)
		})

		it("tests each staffers capability of teaching a skill", function(){
			newGuy.yearsofExperience=0
			newGuy.skillLevel=2
			expect(newGuy.placementRecommendation()).toBe(false)
		})

		it("adds to the staff members skill when they complete and instruction", function(){
			newGuy.skillLevel=2
			newGuy.chopTree()
			expect(newGuy.skillLevel).toEqual(3)
		})
		it("adds a year of experience after the staff member has completed a year on staff", function(){
			newGuy.yearsOfExperience=0
			newGuy.completeYear()
			expect(newGuy.yearsOfExperience).toEqual(1)
		})
	})




})