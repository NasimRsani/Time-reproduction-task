/******************************* 
 * Time Reproduction Task *
 *******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'time reproduction task';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'Age': '',
    'Gender': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(Thank_youRoutineBegin());
flowScheduler.add(Thank_youRoutineEachFrame());
flowScheduler.add(Thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'condition_file.csv', 'path': 'condition_file.csv'},
    {'name': 'دستورالعمل اصلی تسک.png', 'path': 'دستورالعمل اصلی تسک.png'},
    {'name': 'دستورالعمل2.png', 'path': 'دستورالعمل2.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionClock;
var instruction_image;
var key_resp;
var trial_routineClock;
var stim;
var cue_image;
var time_reproduction;
var Thank_youClock;
var Thanks;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instruction_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruction_image', units : 'norm', 
    image : 'دستورالعمل اصلی تسک.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 1.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_routine"
  trial_routineClock = new util.Clock();
  stim = new visual.Polygon({
    win: psychoJS.window, name: 'stim', 
    edges: 100, size:[0.3, 0.3],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  cue_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_image', units : 'norm', 
    image : 'دستورالعمل2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 1.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  time_reproduction = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Thank_you"
  Thank_youClock = new util.Clock();
  Thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'Thanks',
    text: 'Thank you for your attention.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instructionMaxDurationReached;
var _key_resp_allKeys;
var instructionMaxDuration;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = null
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instruction_image);
    instructionComponents.push(key_resp);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_image* updates
    if (t >= 0.0 && instruction_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_image.tStart = t;  // (not accounting for frame time here)
      instruction_image.frameNStart = frameN;  // exact frame index
      
      instruction_image.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 20, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition_file.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trial_routineRoutineBegin(snapshot));
      trialsLoopScheduler.add(trial_routineRoutineEachFrame());
      trialsLoopScheduler.add(trial_routineRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trial_routineMaxDurationReached;
var _time_reproduction_allKeys;
var trial_routineMaxDuration;
var trial_routineComponents;
function trial_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_routineClock.reset();
    routineTimer.reset();
    trial_routineMaxDurationReached = false;
    // update component parameters for each repeat
    time_reproduction.keys = undefined;
    time_reproduction.rt = undefined;
    _time_reproduction_allKeys = [];
    psychoJS.experiment.addData('trial_routine.started', globalClock.getTime());
    trial_routineMaxDuration = null
    // keep track of which components have finished
    trial_routineComponents = [];
    trial_routineComponents.push(stim);
    trial_routineComponents.push(cue_image);
    trial_routineComponents.push(time_reproduction);
    
    for (const thisComponent of trial_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trial_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_routine' ---
    // get current time
    t = trial_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim* updates
    if (t >= 0.0 && stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim.tStart = t;  // (not accounting for frame time here)
      stim.frameNStart = frameN;  // exact frame index
      
      stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + target_duration_sec - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim.setAutoDraw(false);
    }
    
    
    // *cue_image* updates
    if (t >= target_duration_sec && cue_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_image.tStart = t;  // (not accounting for frame time here)
      cue_image.frameNStart = frameN;  // exact frame index
      
      cue_image.setAutoDraw(true);
    }
    
    
    // *time_reproduction* updates
    if (t >= target_duration_sec && time_reproduction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_reproduction.tStart = t;  // (not accounting for frame time here)
      time_reproduction.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { time_reproduction.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { time_reproduction.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { time_reproduction.clearEvents(); });
    }
    
    if (time_reproduction.status === PsychoJS.Status.STARTED) {
      let theseKeys = time_reproduction.getKeys({keyList: ['space'], waitRelease: true});
      _time_reproduction_allKeys = _time_reproduction_allKeys.concat(theseKeys);
      if (_time_reproduction_allKeys.length > 0) {
        time_reproduction.keys = _time_reproduction_allKeys[_time_reproduction_allKeys.length - 1].name;  // just the last key pressed
        time_reproduction.rt = _time_reproduction_allKeys[_time_reproduction_allKeys.length - 1].rt;
        time_reproduction.duration = _time_reproduction_allKeys[_time_reproduction_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_routine' ---
    for (const thisComponent of trial_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_routine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(time_reproduction.corr, level);
    }
    psychoJS.experiment.addData('time_reproduction.keys', time_reproduction.keys);
    if (typeof time_reproduction.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('time_reproduction.rt', time_reproduction.rt);
        psychoJS.experiment.addData('time_reproduction.duration', time_reproduction.duration);
        routineTimer.reset();
        }
    
    time_reproduction.stop();
    // the Routine "trial_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Thank_youMaxDurationReached;
var Thank_youMaxDuration;
var Thank_youComponents;
function Thank_youRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Thank_you' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Thank_youClock.reset(routineTimer.getTime());
    routineTimer.add(30.000000);
    Thank_youMaxDurationReached = false;
    // update component parameters for each repeat
    // disable downloading results to browser
    psychoJS._saveResults = 0;
    //generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    //extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    //convert data object to csv
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    // send data to OSF via DataPipe
    console.log('Saving data ...');
    fetch('https://pipe.jspsych.org/api/data' , {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json' ,
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'EOx2AQXQrqvX', // * Update with your DATAPIPE EXPERIMENT ID *
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // log response and force experiment end
        console.log(data);
        quitPsychoJS();
    }) 
    psychoJS.experiment.addData('Thank_you.started', globalClock.getTime());
    Thank_youMaxDuration = null
    // keep track of which components have finished
    Thank_youComponents = [];
    Thank_youComponents.push(Thanks);
    
    for (const thisComponent of Thank_youComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Thank_youRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Thank_you' ---
    // get current time
    t = Thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Thanks* updates
    if (t >= 0.0 && Thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Thanks.tStart = t;  // (not accounting for frame time here)
      Thanks.frameNStart = frameN;  // exact frame index
      
      Thanks.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Thanks.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Thank_youComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Thank_youRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Thank_you' ---
    for (const thisComponent of Thank_youComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Thank_you.stopped', globalClock.getTime());
    if (Thank_youMaxDurationReached) {
        Thank_youClock.add(Thank_youMaxDuration);
    } else {
        Thank_youClock.add(30.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
