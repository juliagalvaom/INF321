rclpy.init()
node = rclpy.create_node('car_controller')
vel_pub = node.create_publisher(Float64, '/velocity', 10)
steer_pub = node.create_publisher(Float64, '/steering_angle', 10)

vel_pub.publish(Float64(data=1.0))      # m/s -- precisa saber a escala do controller
steer_pub.publish(Float64(data=0.0)) 