module.exports.loop = function () {
    for(let name in Game.creeps){
        var creep = Game.creeps[name];

        //Change working state based on capacity
        if(creep.memory.working == true && creep.carry.energy == 0){
            creep.memory.working = false;
        }
        else if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working == true;
        }   
    
        //If creep has capacity
        if (creep.memory.working == false){
            if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(Game.spawns.Spawn1);
            }
            else{
                creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY);
            }
        }
        //If creep is full
        else if(creep.memory.working == true){
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                creep.moveTo(source);
            }
        }
    }
    
};

