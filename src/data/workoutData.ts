export interface Exercise {
  name: string;
  url: string;
  completed?: boolean;
}

export interface WorkoutDay {
  dayName: string;
  warmup: Exercise[];
  main: Exercise[];
  cooldown: Exercise[];
}

export interface WorkoutWeek {
  weekNumber: number;
  days: WorkoutDay[];
}

export const workoutData: WorkoutWeek[] = [
  {
    weekNumber: 1,
    days: [
      {
        dayName: "Monday (Push)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Push-Ups", url: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Bodyweight Squats", url: "https://www.youtube.com/watch?v=aclHkVaku9U" },
          { name: "Pike Push-Ups", url: "https://www.youtube.com/watch?v=WO-OJBDTa6Q" },
          { name: "Diamond Push-Ups", url: "https://www.youtube.com/watch?v=Jf5_PJCFs-g" },
          { name: "Plank", url: "https://www.youtube.com/watch?v=pSHjTRCQxIw" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Tuesday (Pull)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Inverted Rows (under table/towel)", url: "https://www.youtube.com/watch?v=kp433PfNkf4" },
          { name: "Supermans", url: "https://www.youtube.com/watch?v=mgWyYZoT3RQ" },
          { name: "Hip Bridges", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Bicep Curl (bag/backpack)", url: "https://www.youtube.com/watch?v=R5OT_fATrwQ" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Wednesday (Cardio/Active Recovery)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "High Knees", url: "https://www.youtube.com/watch?v=8opcQdC-V-U" },
          { name: "Jumping Jacks", url: "https://www.youtube.com/watch?v=c4DAnQ6DtF8" },
          { name: "Squat Thrusts", url: "https://www.youtube.com/watch?v=UocGgZP1bUw" },
          { name: "Plank Shoulder Taps", url: "https://www.youtube.com/watch?v=Rt6iHhH81zA" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Thursday (Push)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Decline Push-Ups", url: "https://www.youtube.com/watch?v=61Qj6b88Llo" },
          { name: "Bulgarian Split Squat", url: "https://www.youtube.com/watch?v=2C-uNgKwPLE" },
          { name: "Dive Bomber Push-Ups", url: "https://www.youtube.com/watch?v=FgvskIXa_u8" },
          { name: "Bench Dip (Chair/Bed)", url: "https://www.youtube.com/watch?v=6kALZikXxLc" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Friday (Pull)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Doorframe Rows", url: "https://www.youtube.com/watch?v=lD9ZDwlHmmE" },
          { name: "Glute Bridge Single-Leg", url: "https://www.youtube.com/watch?v=9zqcXK7igDQ" },
          { name: "Reverse Snow Angels", url: "https://www.youtube.com/watch?v=8CQ5PJCw3QA" },
          { name: "Backpack/Isometric Towel Curl", url: "https://www.youtube.com/watch?v=deZ9Up1p2Oo" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Saturday (Circuit/HIIT)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Bodyweight Squats", url: "https://www.youtube.com/watch?v=aclHkVaku9U" },
          { name: "Push-Ups", url: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Inverted Rows", url: "https://www.youtube.com/watch?v=kp433PfNkf4" },
          { name: "Reverse Lunges", url: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Plank", url: "https://www.youtube.com/watch?v=pSHjTRCQxIw" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Sunday (Rest/Mobility)",
        warmup: [],
        main: [
          { name: "Gentle Stretching", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Light Walking", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" }
        ],
        cooldown: []
      }
    ]
  },
  {
    weekNumber: 2,
    days: [
      {
        dayName: "Monday (Push)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Incline Push-Ups", url: "https://www.youtube.com/watch?v=JohX6z74DKA" },
          { name: "Walking Lunges", url: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Shoulder Tap Push-Ups", url: "https://www.youtube.com/watch?v=-U9wQkHE4hg" },
          { name: "Tricep Dips", url: "https://www.youtube.com/watch?v=6kALZikXxLc" },
          { name: "Bicycle Crunches", url: "https://www.youtube.com/watch?v=9FGilxCbdz8" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Tuesday (Pull)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Door Pull-Aparts (Towel)", url: "https://www.youtube.com/watch?v=YNQMT6TWmnY" },
          { name: "Superman Shrugs", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" },
          { name: "Single-Leg Hip Thrust", url: "https://www.youtube.com/watch?v=Xq3nUS-Y2q4" },
          { name: "Table/Broomstick Curls", url: "https://www.youtube.com/watch?v=ENG-VQC_FoA" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Wednesday (Cardio/Active Recovery)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "High Knees", url: "https://www.youtube.com/watch?v=8opcQdC-V-U" },
          { name: "Jumping Jacks", url: "https://www.youtube.com/watch?v=c4DAnQ6DtF8" },
          { name: "Squat Thrusts", url: "https://www.youtube.com/watch?v=UocGgZP1bUw" },
          { name: "Plank Shoulder Taps", url: "https://www.youtube.com/watch?v=Rt6iHhH81zA" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Thursday (Push)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Diamond Push-Ups", url: "https://www.youtube.com/watch?v=Jf5_PJCFs-g" },
          { name: "Step-Ups (Stairs/Chair)", url: "https://www.youtube.com/watch?v=dQqApCGd5Ss" },
          { name: "Lateral Plank Walks", url: "https://www.youtube.com/watch?v=WO-OJBDTa6Q" },
          { name: "Close-Grip Push-Ups", url: "https://www.youtube.com/watch?v=0AUGkch3tzc" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Friday (Pull)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Lying Towel Rows", url: "https://www.youtube.com/watch?v=JNuvfHkCHBM" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Table Bodyweight Curls", url: "https://www.youtube.com/watch?v=ENG-VQC_FoA" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Saturday (Circuit/HIIT)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Bodyweight Squats", url: "https://www.youtube.com/watch?v=aclHkVaku9U" },
          { name: "Push-Ups", url: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Inverted Rows", url: "https://www.youtube.com/watch?v=kp433PfNkf4" },
          { name: "Reverse Lunges", url: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Plank", url: "https://www.youtube.com/watch?v=pSHjTRCQxIw" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Sunday (Rest/Mobility)",
        warmup: [],
        main: [
          { name: "Gentle Stretching", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Light Walking", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" }
        ],
        cooldown: []
      }
    ]
  },
  {
    weekNumber: 3,
    days: [
      {
        dayName: "Monday (Push)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Push-Ups", url: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Bodyweight Squats", url: "https://www.youtube.com/watch?v=aclHkVaku9U" },
          { name: "Pike Push-Ups", url: "https://www.youtube.com/watch?v=WO-OJBDTa6Q" },
          { name: "Diamond Push-Ups", url: "https://www.youtube.com/watch?v=Jf5_PJCFs-g" },
          { name: "Plank", url: "https://www.youtube.com/watch?v=pSHjTRCQxIw" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Tuesday (Pull)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Inverted Rows (under table/towel)", url: "https://www.youtube.com/watch?v=kp433PfNkf4" },
          { name: "Supermans", url: "https://www.youtube.com/watch?v=mgWyYZoT3RQ" },
          { name: "Hip Bridges", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Bicep Curl (bag/backpack)", url: "https://www.youtube.com/watch?v=R5OT_fATrwQ" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Wednesday (Cardio/Active Recovery)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "High Knees", url: "https://www.youtube.com/watch?v=8opcQdC-V-U" },
          { name: "Jumping Jacks", url: "https://www.youtube.com/watch?v=c4DAnQ6DtF8" },
          { name: "Squat Thrusts", url: "https://www.youtube.com/watch?v=UocGgZP1bUw" },
          { name: "Plank Shoulder Taps", url: "https://www.youtube.com/watch?v=Rt6iHhH81zA" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Thursday (Push)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Decline Push-Ups", url: "https://www.youtube.com/watch?v=61Qj6b88Llo" },
          { name: "Bulgarian Split Squat", url: "https://www.youtube.com/watch?v=2C-uNgKwPLE" },
          { name: "Dive Bomber Push-Ups", url: "https://www.youtube.com/watch?v=FgvskIXa_u8" },
          { name: "Bench Dip (Chair/Bed)", url: "https://www.youtube.com/watch?v=6kALZikXxLc" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Friday (Pull)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Doorframe Rows", url: "https://www.youtube.com/watch?v=lD9ZDwlHmmE" },
          { name: "Glute Bridge Single-Leg", url: "https://www.youtube.com/watch?v=9zqcXK7igDQ" },
          { name: "Reverse Snow Angels", url: "https://www.youtube.com/watch?v=8CQ5PJCw3QA" },
          { name: "Backpack/Isometric Towel Curl", url: "https://www.youtube.com/watch?v=deZ9Up1p2Oo" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Saturday (Circuit/HIIT)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Bodyweight Squats", url: "https://www.youtube.com/watch?v=aclHkVaku9U" },
          { name: "Push-Ups", url: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Inverted Rows", url: "https://www.youtube.com/watch?v=kp433PfNkf4" },
          { name: "Reverse Lunges", url: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Plank", url: "https://www.youtube.com/watch?v=pSHjTRCQxIw" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Sunday (Rest/Mobility)",
        warmup: [],
        main: [
          { name: "Gentle Stretching", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Light Walking", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" }
        ],
        cooldown: []
      }
    ]
  },
  {
    weekNumber: 4,
    days: [
      {
        dayName: "Monday (Push)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Incline Push-Ups", url: "https://www.youtube.com/watch?v=JohX6z74DKA" },
          { name: "Walking Lunges", url: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Shoulder Tap Push-Ups", url: "https://www.youtube.com/watch?v=-U9wQkHE4hg" },
          { name: "Tricep Dips", url: "https://www.youtube.com/watch?v=6kALZikXxLc" },
          { name: "Bicycle Crunches", url: "https://www.youtube.com/watch?v=9FGilxCbdz8" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Tuesday (Pull)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Door Pull-Aparts (Towel)", url: "https://www.youtube.com/watch?v=YNQMT6TWmnY" },
          { name: "Superman Shrugs", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" },
          { name: "Single-Leg Hip Thrust", url: "https://www.youtube.com/watch?v=Xq3nUS-Y2q4" },
          { name: "Table/Broomstick Curls", url: "https://www.youtube.com/watch?v=ENG-VQC_FoA" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Wednesday (Cardio/Active Recovery)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "High Knees", url: "https://www.youtube.com/watch?v=8opcQdC-V-U" },
          { name: "Jumping Jacks", url: "https://www.youtube.com/watch?v=c4DAnQ6DtF8" },
          { name: "Squat Thrusts", url: "https://www.youtube.com/watch?v=UocGgZP1bUw" },
          { name: "Plank Shoulder Taps", url: "https://www.youtube.com/watch?v=Rt6iHhH81zA" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Thursday (Push)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Diamond Push-Ups", url: "https://www.youtube.com/watch?v=Jf5_PJCFs-g" },
          { name: "Step-Ups (Stairs/Chair)", url: "https://www.youtube.com/watch?v=dQqApCGd5Ss" },
          { name: "Lateral Plank Walks", url: "https://www.youtube.com/watch?v=WO-OJBDTa6Q" },
          { name: "Close-Grip Push-Ups", url: "https://www.youtube.com/watch?v=0AUGkch3tzc" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Friday (Pull)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Lying Towel Rows", url: "https://www.youtube.com/watch?v=JNuvfHkCHBM" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Table Bodyweight Curls", url: "https://www.youtube.com/watch?v=ENG-VQC_FoA" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Saturday (Circuit/HIIT)",
        warmup: [
          { name: "Bent Knee Iron Cross", url: "https://www.youtube.com/watch?v=9q5QKvRbECU" },
          { name: "Fire Hydrant Circles", url: "https://www.youtube.com/watch?v=ng1P4Q4l2M8" },
          { name: "Mountain Climbers", url: "https://www.youtube.com/watch?v=cnyTQDSE884" },
          { name: "Cat and Cow Stretch", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Arm Circles", url: "https://www.youtube.com/watch?v=bP52FXTlzjA" },
          { name: "Neck Circles", url: "https://www.youtube.com/watch?v=gBwGyIp5vdM" },
          { name: "Wrist Circles", url: "https://www.youtube.com/watch?v=wRSk1_C6yOM" }
        ],
        main: [
          { name: "Bodyweight Squats", url: "https://www.youtube.com/watch?v=aclHkVaku9U" },
          { name: "Push-Ups", url: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Inverted Rows", url: "https://www.youtube.com/watch?v=kp433PfNkf4" },
          { name: "Reverse Lunges", url: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Plank", url: "https://www.youtube.com/watch?v=pSHjTRCQxIw" }
        ],
        cooldown: [
          { name: "Pec Stretch", url: "https://www.youtube.com/watch?v=SV7l1sfEmO0" },
          { name: "Child's Pose", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Cat/Cow", url: "https://www.youtube.com/watch?v=vuyUwtHl694" },
          { name: "Dragon Stretch", url: "https://www.youtube.com/watch?v=Cl4ZWHJP8cs" },
          { name: "Sphinx Pose", url: "https://www.youtube.com/watch?v=F5JVnU-hQ44" },
          { name: "Glute Bridge", url: "https://www.youtube.com/watch?v=mwDgFY86zck" },
          { name: "Spinal Twist", url: "https://www.youtube.com/watch?v=mNdJti7ZwKl" }
        ]
      },
      {
        dayName: "Sunday (Rest/Mobility)",
        warmup: [],
        main: [
          { name: "Gentle Stretching", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" },
          { name: "Light Walking", url: "https://www.youtube.com/watch?v=qYvYsFrTI0U" }
        ],
        cooldown: []
      }
    ]
  }
];